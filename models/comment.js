// Import required modules
const express = require('express');
const router = express.Router();
const { validateComment } = require('../middleware/validation'); // Import validateComment middleware

// Define route handlers
router.post('/:postId', validateComment, async (req, res) => {
  // Your route handler logic here
});

// Export router
module.exports = router;
