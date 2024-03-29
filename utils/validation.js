// validation.js

// Function to validate user input
function validateUserData(data) {
    // Implement your validation logic here
    // For example:
    if (!data.name || typeof data.name !== 'string') {
        throw new Error('Name is required and must be a string');
    }

    if (!data.email || typeof data.email !== 'string') {
        throw new Error('Email is required and must be a string');
    }

    // Add more validation rules as needed

    // Return true if validation passes
    return true;
}

module.exports = {
    validateUserData
};
