// imports
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import connectDB from './db/conn.mjs'
import routes from './routes/songRoutes.mjs'
import { songs } from './data/data.mjs'
import Song 

// setup
const app = express()
let PORT = process.env.PORT || 3001
dotenv.config()


// DB connection
connectDB()

// middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
//routes
app.use('/songs',Routes)

app.get('/seed', async (req, res) => {
    // Create items in database
    await Song.create(songs)
    res.send('Seeding database')
  });
// listener
app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})