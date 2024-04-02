const mongoose = require('mongoose');
// const config = require('config');

// Hardcoded connection string
const mongodbUri = 'mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/
/';

// Connect to MongoDB
mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose;
