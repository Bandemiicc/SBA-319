import mongoose from 'mongoose';
const songSchema = new mongoose.Schema({

});
songSchema.index({name: 1})
export default mongoose.model('Song', songSchema);