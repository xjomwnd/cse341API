const mongoose = require('mongoose');

// MongoDB connection string
const mongodbUri = ' mongodb+srv://mwa21001:<password>@cluster0.dmvu7jc.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongodbUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
