// connect to MongoDB using Mongoose
const mongoose = require('mongoose');
require('dotenv').config();
async function connectDB() {
await mongoose.connect(process.env.MONGODB_URI);
console.log('connected to MongoDB')    
}
module.exports = {connectDB, mongoose };