const { connectDB, mongoose } = require('./db');
const Book = require('./model/books');
async function main() {
    await connectDB();


    // Find books in the "Self-help" genre
    const selfHelpBooks = await Book.find({ genre: "Self-help" });
    console.log("Self-help books:", selfHelpBooks);

    // Find books published after a certain year
    const recentBooks = await Book.find({ published_year: { $gt: 2010 } });
    console.log("Books published after 2010:", recentBooks);

    // Find books by a specific author
    const authorBooks = await Book.find({ author: "Jim Collins" });
    console.log("Books by Jim Collins:", authorBooks);

    // Update the price of a specific book
    const updateResult = await Book.updateOne({ title: "Atomic Habits" }, { price: 650 });
    console.log("Book price updated:", updateResult);

    // Delete a book by its title
    const deleteResult = await Book.deleteOne({ title: "Grit" });
    console.log("Book deleted:", deleteResult);

    // Find books where in_stock is true AND published_year > 2010
    const books = await Book.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    });
    console.log("In stock & published after 2010:", books);

    // Only include specific fields in the results: title, author, and price
    const projectedBooks = await Book.find({}, { title: 1, author: 1, price: 1, _id: 0 }); 
    console.log("Using object projection:", projectedBooks);

    // Sort books by price ascending
    const booksAsc = await Book.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1 });
    console.log("Books sorted by price (ascending):", booksAsc);

    // Sort books by price descending
    const booksDesc = await Book.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 });
    console.log("Books sorted by price (descending):", booksDesc);

    // Pagination
    const page = 1; 
    const limit = 5;
    const skip = (page - 1) * limit;
    const paginatedBooksDesc = await Book.find({}, { title: 1, author: 1, price: 1, _id: 0 })
      .sort({ price: -1 })
      .skip(skip)
      .limit(limit);
    console.log(`Page ${page} (sorted by price descending, 5 books per page):`, paginatedBooksDesc);

    // Aggregation: Calculate average price of books by genre
    const avgPriceByGenre = await Book.aggregate([
      { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
    ]);
    console.log("Average price of books by genre:", avgPriceByGenre);

    // Aggregation: Find the author with the most books
    const mostBooksAuthor = await Book.aggregate([
      { $group: { _id: "$author", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);
    console.log("Author with the most books:", mostBooksAuthor);

    // Aggregation: Group books by publication decade and count them
    const booksByDecade = await Book.aggregate([
      { $project: {
          decade: { $concat: [
            { $toString: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } },
            "s"
          ] }
        }
      },
      { $group: { _id: "$decade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    console.log("Books grouped by publication decade:", booksByDecade);

    // Demonstrate index usage with explain()
    const explainResult = await Book.find({ author: "Jim Collins", published_year: 2001 })
      .explain("executionStats");
    console.log("Explain output for author and published_year query:", explainResult);

    await mongoose.disconnect();


}

main();