const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); // Import Mongoose
const cors = require('cors');

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Middleware for handling sessions
app.use(session({
  secret: 'your_secret_key', // Change this to a secure secret key
  resave: false,
  saveUninitialized: false
}));

// Middleware for Passport session
app.use(passport.initialize());
app.use(passport.session());

// Middleware for setting headers
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json'); // Example header
  next();
});

// Middleware for enabling CORS
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://ndimong:<password>@cluster0.iwufs.mongodb.net/')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Dummy data for demonstration
let users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' }
];

// Passport OAuth2 strategy configuration
passport.use(new OAuth2Strategy({
  authorizationURL: 'https://oauth2-provider.com/auth',
  tokenURL: 'https://oauth2-provider.com/token',
  clientID: 'your_client_id',
  clientSecret: 'your_client_secret',
  callbackURL: 'http://localhost:3000/callback'
},
function(accessToken, refreshToken, profile, cb) {
  // Dummy user profile retrieval
  const user = users.find(user => user.id === profile.id);
  return cb(null, user);
}));

// Serialize and deserialize user functions for Passport
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(user => user.id === id);
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  res.send('OAuth2 Server');
});

app.get('/profile', ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

app.post('/profile', ensureAuthenticated, (req, res) => {
  // Update user profile (example)
  const { name } = req.body;
  req.user.name = name;
  res.json(req.user);
});

app.delete('/profile', ensureAuthenticated, (req, res) => {
  // Delete user profile (example)
  users = users.filter(user => user.id !== req.user.id);
  req.logout(); // Logout the user
  res.send('User profile deleted');
});

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
}

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});



const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
