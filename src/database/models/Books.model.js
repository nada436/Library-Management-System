import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    availableCopies: { type: Number, required: true }
});
export const book_model = mongoose.model('Book', bookSchema)||mongoose.models.Book;