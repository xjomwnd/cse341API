// contacts.js

// Import necessary modules
const Contact = require('../models/contact'); // Assuming you have a Contact model
const { validateContactData } = require('./validation'); // Assuming you have a validation module
const { validateContact } = require('../routes/validate');

// Controller function to create a new contact
async function createContact(req, res) {
    try {
        // Validate request body
        validateContactData(req.body);

        // Create a new contact
        const newContact = new Contact(req.body);

        // Save the contact to the database
        await newContact.save();

        // Return success response
        res.status(201).json({ message: 'Contact created successfully', contact: newContact });
    } catch (error) {
        // Handle validation or database errors
        console.error(error);
        res.status(400).json({ error: error.message || 'Failed to create contact' });
    }
}

// Controller function to fetch all contacts
async function getAllContacts(req, res) {
    try {
        // Fetch all contacts from the database
        const contacts = await Contact.find();

        // Return contacts as a JSON response
        res.json(contacts);
    } catch (error) {
        // Handle database errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Export controller functions
module.exports = {
    createContact,
    getAllContacts
};
