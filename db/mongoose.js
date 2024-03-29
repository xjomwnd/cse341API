const mongoose = require('mongoose');
const config = require('./config'); mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/


// MongoDB connection URI
const uri = config.mongodb.uri; mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/

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
