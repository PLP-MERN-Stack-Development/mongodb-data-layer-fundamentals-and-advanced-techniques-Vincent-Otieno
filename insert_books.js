const { connectDB, mongoose } = require('./db');
const Book = require('./model/books');

async function main() {
    await connectDB();

    // insert books
    await Book.insertMany([
  {title:"Good to Great", author:"Jim Collins", genre:"Business", published_year:2001, price:500, in_stock:false, pages:320, publisher:"HarperBusiness"},
  {title:"Eat that Frog", author:"Brian Tracy", genre:"Self-help", published_year:2001, price:400, in_stock:true, pages:144, publisher:"Berrett-Koehler Publishers"},
  {title:"Thinking, Fast and Slow", author:"Daniel Kahneman", genre:"Psychology", published_year:2011, price:550, in_stock:true, pages:499, publisher:"Farrar, Straus and Giroux"},
  {title:"The 48 laws of power", author:"Robert Greene", genre:"Self-help", published_year:1998, price:1000, in_stock:false, pages:452, publisher:"Penguin Books"},
  {title:"The Lean Startup", author:"Eric Ries", genre:"Business", published_year:2011, price:900, in_stock:true, pages:336, publisher:"Crown Business"},
  {title:"Start with Why", author:"Simon Sinek", genre:"Leadership", published_year:2009, price:1200, in_stock:true, pages:256, publisher:"Portfolio"},
  {title:"The Innovator's Dilemma", author:"Clayton Christensen", genre:"Business", published_year:1997, price:700, in_stock:false, pages:288, publisher:"Harvard Business Review Press"},
  {title:"Grit", author:"Angela Duckworth", genre:"Psychology", published_year:2016, price:500, in_stock:false, pages:352, publisher:"Scribner"},
  {title:"Deep Work", author:"Cal Newport", genre:"Productivity", published_year:2016, price:450, in_stock:true, pages:296, publisher:"Grand Central Publishing"},
  {title:"Atomic Habits", author:"James Clear", genre:"Self-help", published_year:2018, price:600, in_stock:true, pages:320, publisher:"Avery"}
])
console.log("Books inserted");
await mongoose.disconnect();
    
}

main();