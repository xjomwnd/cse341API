// contact.js

// Import necessary modules
const mongoose = require('mongoose');

// Define the contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Contact model
module.exports = mongoose.model('Contact', contactSchema);
