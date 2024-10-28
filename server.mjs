// IMPORTS
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

// SETUP
const app = express();
let PORT = process.env.PORT || 3001;
dotenv.config()

//DB CONNECTION

// MIDDlEWARE
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))


// ROUTES
app,use('/', route)


// LISTENER
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})