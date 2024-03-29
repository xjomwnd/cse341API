// authentication.js

// Example authentication middleware
const authenticateUser = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // User is authenticated, continue to the next middleware
        return next();
    } else {
        // User is not authenticated, send unauthorized response
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { authenticateUser };
