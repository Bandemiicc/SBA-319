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
        const = newSong = new Song(req.body)

        await newSong.save()

        res.json(newSong)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
})
// Read
router.get('/', (req,res)=>{
    try {
        const allSongs = await song.find({})

        res.json(allSongs)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
// Update
router.put('/:id', (req,res)=>{
    try {
        let updatedSong = await song.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.json(updatedSong)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
// Delete
router.delete('/:id', (req,res)=>{
    try {
        let deletedSong = await Song.findByIdAndDelete(req.params.id);
        
        res.json(deletedSong);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }

export default router;