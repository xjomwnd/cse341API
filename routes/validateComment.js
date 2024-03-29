// Import required modules
const express = require('express');
const router = express.Router();

// Import validation middleware
const { validateComment } = require('./validateComment');  // Adjust path if needed

// Define route handlers
router.post('/:postId', validateComment, async (req, res) => {
  // Your route handler logic here

  // You can access validated data from req.body after validation
});

// Export router
module.exports = router;