const express = require('express');
const { signup, login } = require('../controllers/authController'); // Adjust the path as necessary
const authMiddleware = require('../middlewares/authMiddlewares'); // Adjust the path as necessary

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route', user: req.user });
});

module.exports = router;
