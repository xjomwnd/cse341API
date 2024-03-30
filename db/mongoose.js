const mongoose = require('mongoose');
const config = require('config');

// Access configuration properties
const mongodbUri = config.get('mongodb.uri');

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
