const getVerify = (req, res, next) => {
  if (!req.user || req.user === undefined || req.user === null) {
    res.status(401).json({ message: 'Expired' });
  } else {
    next();
  }
};

module.exports = { getVerify };
