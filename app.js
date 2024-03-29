const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import middleware
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(sessionMiddleware);

// Passport configuration
require('./config/passport')(passport);

// Routes
app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;