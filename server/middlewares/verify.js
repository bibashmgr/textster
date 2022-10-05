const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;

const getVerify = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, ACCESS_TOKEN);
      req.userId = decoded.id;
      next();
    } catch (error) {
      res.status(403).json('ACCESS DENIED');
    }
  } else {
    res.status(401).json('TOKEN NOT FOUND');
  }
};

module.exports = { getVerify };
