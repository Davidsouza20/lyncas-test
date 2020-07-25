const mongoose = require('../database');

const BookSchema = new mongoose.Schema({
    book_id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;