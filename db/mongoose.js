const mongoose = require('mongoose');
const config = require('config');

// Access configuration properties
const mongodbUri = config.get('mongodb.uri');

// MongoDB connection URI
// const uri = config.mongodb.uri; mongodb+srv;//ndimong:<password>@cluster0.iwufs.mongodb.net/
// ^ This line is commented out as it's not needed and contains syntax errors

// Connect to MongoDB
mongoose.connect(mongodbUri, { // Use mongodbUri variable instead of uri
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

// Define Schema and Models here if using Mongoose

module.exports = mongoose; // Optionally, you can export mongoose for use in other modules
