const mongoose = require('mongoose');

export async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/csm");
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('Error connecting to MongoDB', error);
    }
  }

