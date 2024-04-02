const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://ndimong:7Thayowaku77@cluster0.iwufs.mongodb.net/';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
