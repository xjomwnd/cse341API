// comment.js (or wherever you define your routes)

const express = require('express');
const router = express.Router();
const { validateComment } = require('./validateComment');  // Import the middleware

router.post('/:postId', validateComment, async (req, res) => {
  // Your route handler logic here

  // You can access validated data from req.body after validation
});

// Export router
module.exports = router;