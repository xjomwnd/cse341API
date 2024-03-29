// Import required modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment'); // Assuming you have a Comment model defined

// Middleware for comment validation
const { validateComment } = require('../middleware/validation');

// Route to get comments for a specific post
router.get('/:postId', async (req, res) => {
    try {
        // Find comments for the specified post
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
});

// Route to add a comment to a post
router.post('/:postId', validateComment, async (req, res) => {
    // Create a new comment object based on the request body
    const comment = new Comment({
        postId: req.params.postId,
        userId: req.body.userId,
        text: req.body.text
    });

    try {
        // Save the new comment to the database
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        // Handle validation or database errors
        res.status(400).json({ message: err.message });
    }
});

// Export the router
module.exports = router;
