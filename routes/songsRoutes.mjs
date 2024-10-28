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
      const newSong = new Song (req.body);
      await newSong.save();
        res.json(newSong)
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
})
// Read
router.get('/', (req,res)=>{
    try {
       const songs = await Song.find()
       res.json(songs);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: "server error"})
    }
// Update
router.put('/:id', (req,res)=>{
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedSong) {
            return res.status(404).json({msg: "Song not found :("})
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
// Delete
router.delete('/:id', (req,res)=>{
    try {
      const deletedSong = await Song.findIdAndDelete(req.params.id);
      if (!deletedSong) {
        return res.status(404).json({msg: "Song not found"})
      }
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "server error"})
    }
})
export default router;