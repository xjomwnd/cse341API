// Import necessary modules
const express = require('express');
const passport = require('./passport-setup.js');

// Create an Express application
const app = express();

// Route to initiate authentication
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after successful authentication
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home or perform other actions
    res.redirect('/');
  }
);

// Other routes and middleware...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});