const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy data for demonstration purposes
let socialMediaData = [
    { username: 'user1', platform: 'twitter', content: 'This is a tweet!' },
    { username: 'user2', platform: 'facebook', content: 'A Facebook post.' }
];

// Routes
// Get all social media posts
app.get('/api/posts', (req, res) => {
    res.json(socialMediaData);
});

// Add a new social media post
app.post('/api/posts', (req, res) => {
    const newPost = req.body;
    socialMediaData.push(newPost);
    res.status(201).json(newPost);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
