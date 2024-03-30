// validate.js

// Function to validate a contact object
function validateContact(contact) {
    if (!contact || typeof contact !== 'object') {
        throw new Error('Contact object is invalid');
    }

    if (!contact.name || typeof contact.name !== 'string') {
        throw new Error('Contact name is required and must be a string');
    }

    if (!contact.email || typeof contact.email !== 'string') {
        throw new Error('Contact email is required and must be a string');
    }

    // Add more validation rules as needed

    // If all validations pass, return true
    return true;
}

// Export the function so it can be used in other files
module.exports = {
    validateContact
};
