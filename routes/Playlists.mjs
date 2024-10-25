// Import
import express from "express";
const router = express.Router();
// Test route
router.get('/', (req, res) =>{
    res.send('Testing!!')
})

// Create
router.post('/', (req,res)=>{
    try {
      
        res.json(newSong)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
})
// Read
router.get('/', (req,res)=>{
    try {
       
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
// Update
router.put('/:id', (req,res)=>{
    try {
        
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
// Delete
router.delete('/:id', (req,res)=>{
    try {
      
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }

export default router;