const jwt   = require('jsonwebtoken')
const {
  AppError
}           = require('../classes')

function verifyToken(token) {
  try {
    return jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
    )
  } catch (e) {
    throw new AppError(500, 'Cannot verify token. Please provide valid token.')
  }
}

module.exports = verifyToken