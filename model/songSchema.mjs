import mongoose from 'mongoose';
const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: True,
        index: True,
    },
    Artist: {
        type: String,
        required: True,
        index: True,
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Album: {
        type: String,
        default: "undefined"
    },
});
userSchema.index({name: 1})
export default mongoose.model('Song', SongSchema);