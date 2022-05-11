const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// constants
const ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;

const getVerify = (req, res, next) => {
  const authHeaders = req.headers('Authorization');
  const token = authHeaders.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, ACCESS_TOKEN);
      req.userId = decoded;
      next();
    } catch (error) {
      res.status(403).json('ACCESS DENIED');
    }
  } else {
    res.status(404).json('NOT FOUND');
  }
};
