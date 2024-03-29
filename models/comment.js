// Import required modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const { validateComment } = require('../middleware/validation'); // Import validateComment middleware

// Define route handlers

// Get comments for a post
router.get('/:postId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a comment to a post
router.post('/:postId', validateComment, async (req, res) => {
    const comment = new Comment({
        postId: req.params.postId,
        userId: req.body.userId,
        text: req.body.text
    });
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Export router
module.exports = router;
