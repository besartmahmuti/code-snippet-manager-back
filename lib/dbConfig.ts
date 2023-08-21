import { log } from "console";

const mongoose = require('mongoose');

export async function connectToDatabase() {
    try {
      console.log(process.env.DB_URL);
      
        await mongoose.connect(process.env.DB_URL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('Error connecting to MongoDB', error);
    }
  }

