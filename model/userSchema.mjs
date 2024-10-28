import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({

});
userSchema.index({name: 1})
export default mongoose.model('Song', userSchema);