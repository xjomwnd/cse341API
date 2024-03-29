const session = require('express-session');
const config = require('../config/config');

const sessionMiddleware = session({
  secret: config.sessionSecret, // Secret key for signing the session ID cookie
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
  cookie: {
    maxAge: config.sessionMaxAge, // Maximum age of the session cookie (in milliseconds)
  },
});

module.exports = sessionMiddleware;