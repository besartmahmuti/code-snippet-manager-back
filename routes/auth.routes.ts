import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.model';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, full_name } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    user = new User({
      username,
      email,
      password: hashedPassword,
      full_name,
    });

 
    await user.save();


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

export default router;