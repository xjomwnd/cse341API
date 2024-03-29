// Assuming you have a function to authenticate users
const authenticateUser = (req, res, next) => {
    // Your authentication logic here
    // For example, you might check if the user is logged in
    if (req.session && req.session.userId) {
      // User is authenticated
      next();
    } else {
      // User is not authenticated, redirect to login page or send an error response
      res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = authenticateUser;
  