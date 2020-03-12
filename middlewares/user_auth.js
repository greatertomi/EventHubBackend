const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers = req.headers['x-access-token'];

    const decoded = jwt.verify(token, 'eventHubsSecretKey1627');
    req.userData = decoded;
    next();
  }
  catch (error) {
    return res.status(401).json({
      message: 'Problem with jwt'
    });
  }
};
