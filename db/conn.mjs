import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.mongoURI;

export default async function connectDB(){
    try {
        await mongoose.connect(connectionString)
        console.log('mongoDB connected...')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

