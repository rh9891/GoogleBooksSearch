import axios from "axios";

export default {
    // Gets all books.
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_PASS}`)
    },
    // Deletes the book with a given id.
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Gets a saved book from the database.
    savedBooks: function() {
        return axios.get("/api/books").then(result => result.data);
    }
};
