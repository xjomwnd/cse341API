const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection string from environment variable
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the database connection
module.exports = db;