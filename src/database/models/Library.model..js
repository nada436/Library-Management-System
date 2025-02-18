import mongoose from 'mongoose';
const librarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});
 export const library_model = mongoose.model('Library', librarySchema)||mongoose.models.Library