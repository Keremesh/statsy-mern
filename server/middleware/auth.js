// require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    console.log("Decoded Token:", decodedToken);
    const userId = decodedToken.userId;
    console.log("User ID:", userId);
    // const userName = decodedToken.name; // User name undefined
    // console.log("Username:", userName);

    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};