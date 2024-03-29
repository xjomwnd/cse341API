const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Replace these values with your actual Google OAuth credentials
const GOOGLE_CLIENT_ID = 'your-client-id';
const GOOGLE_CLIENT_SECRET = 'your-client-secret';
const CALLBACK_URL = 'http://localhost:3000/auth/google/callback'; // Adjust the URL as needed

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    // This callback function will be called when a user is authenticated by Google
    // You can perform operations like saving the user to your database here
    // For demonstration purposes, we'll just log the user profile
    console.log(profile);
    return done(null, profile);
  }
));

module.exports = passport;