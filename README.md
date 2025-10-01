# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

## Project Code Overview

This project demonstrates MongoDB data layer fundamentals and advanced techniques using Node.js and Mongoose. It includes scripts for connecting to MongoDB, defining a book model, inserting sample data, and performing various queries and aggregations.

### File Structure

- `db.js`: Handles MongoDB connection using Mongoose and loads environment variables from `.env`.
- `model/books.js`: Defines the Book schema and model, including indexes for efficient querying.
- `insert_books.js`: Connects to MongoDB and inserts a set of sample book documents into the database.
- `queries.js`: Demonstrates advanced MongoDB queries, updates, deletions, projections, sorting, pagination, and aggregation using the Book model.

### How It Works

#### 1. Database Connection (`db.js`)
- Uses Mongoose to connect to MongoDB.
- Loads the connection URI from `.env` (`MONGODB_URI`).
- Exports the connection function and Mongoose instance.

#### 2. Book Model (`model/books.js`)
- Defines a schema for books with fields like title, author, genre, published year, price, stock status, pages, and publisher.
- Adds indexes for faster searches on `title` and a compound index on `author` and `published_year`.
- Exports the Book model for use in other scripts.

#### 3. Insert Books (`insert_books.js`)
- Imports the database connection and Book model.
- Connects to MongoDB and inserts an array of sample book objects.
- Disconnects from MongoDB after insertion.

#### 4. Queries and Aggregations (`queries.js`)
- Connects to MongoDB and performs various operations:
  - Finds books by genre, author, and publication year.
  - Updates book prices and deletes books by title.
  - Projects specific fields, sorts results, and paginates.
  - Aggregates data to calculate average prices by genre, find the author with the most books, and group books by publication decade.
  - Demonstrates index usage with the `explain()` method.

### Usage

1. Set your MongoDB URI in a `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/your_db_name
   ```
2. Run `insert_books.js` to populate the database:
   ```
   node insert_books.js
   ```
3. Run `queries.js` to see query and aggregation examples:
   ```
   node queries.js
   ```

### Requirements

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Mongoose (installed via `npm install mongoose`)
- dotenv (installed via `npm install dotenv`)

### Learning Outcomes

- Connect to MongoDB using Mongoose
- Define schemas and models
- Insert, query, update, and delete documents
- Use projections, sorting, and pagination
- Build aggregation pipelines
- Create and use indexes for performance

---