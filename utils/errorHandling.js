// errorHandling.js

// Function to handle errors
function errorHandler(err, req, res, next) {
    // Log the error
    console.error(err.stack);

    // Set response status code
    res.status(500);

    // Return error response
    res.json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
}

module.exports = errorHandler;
