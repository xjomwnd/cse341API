// Example route protected with Passport
app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    res.send(`Hello, ${req.user.displayName}`);
  }
);