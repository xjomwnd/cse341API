// Import any required modules
const { validationResult, body } = require('express-validator');

// Define the validation middleware function
const validateComment = [
  // Specify validation rules using express-validator
  body('comment').trim().isLength({ min: 1 }).withMessage('Comment must not be empty'),

  // Custom validation logic can be added here

  // After defining the validation rules, handle validation errors
  (req, res, next) => {
    // Extract any validation errors
    const errors = validationResult(req);

    // If there are validation errors, return a response with the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passes, proceed to the next middleware
    next();
  }
];

// Export the middleware function
module.exports = { validateComment };
