// IMPORTS
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './conn.mjs';
import songRoutes from './songRoutes.mjs';
import playlistRoutes from './playlistRoutes.mjs';

// SETUP
const app = express();
let PORT = process.env.PORT || 3001;
dotenv.config()

//DB CONNECTION
connectDB()

// MIDDlEWARE
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


// ROUTES
app.use('/songs', songRoutes);
app.use('/playlists', playlistRoutes);

// LISTENER
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})