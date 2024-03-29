// auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Define the POST route for user authentication
router.post('/login', (req, res) => {
    // Your authentication logic here
    res.send('Login route');
});

module.exports = router;
