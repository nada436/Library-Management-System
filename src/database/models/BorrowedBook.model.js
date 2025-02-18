import mongoose from "mongoose";

const borrowedBookSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    borrowedAt: { type: Date, required: true, default: Date.now },
    dueDate: { type: Date, required: true },
    returned: { type: Boolean, default: false }
});
export const borrowedBook_model= mongoose.model('BorrowedBook', borrowedBookSchema)||mongoose.models.BorrowedBook