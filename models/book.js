const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;