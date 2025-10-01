const mongoose = require('mongoose');
// Define the Book schema
const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
    genre: { type: String },
	published_year: { type: Number },
	price: { type: Number },
    in_stock: { type: Boolean },
	pages: { type: Number },
    publisher: { type: String }
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

// Create an index on the title field for faster searches
bookSchema.index({ title: 1 });

// Create a compound index on author and published_year
bookSchema.index({ author: 1, published_year: 1 });



module.exports = Book;
