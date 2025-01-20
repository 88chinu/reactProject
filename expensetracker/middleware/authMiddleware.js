const jwt = require('jsonwebtoken');
const User = require('../model/userModel'); // Assuming you have a User model.

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Find the user associated with the token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Attach the user object to the request for downstream handlers
    req.user = user;

    next(); // Call the next middleware or route handler
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: 'Unauthorized: Token validation failed' });
  }
};

module.exports = authMiddleware;
