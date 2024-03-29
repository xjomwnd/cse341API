const mongoose = require('mongoose');
const config = require('./config'); // Assuming you have a config.js file for configuration

// MongoDB connection URI
const uri = config.mongodb.uri; // Replace with your MongoDB connection URI

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

// Define Schema and Models here if using Mongoose
