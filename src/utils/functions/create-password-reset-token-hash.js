const crypto = require('crypto')

function createPasswordResetTokenHash(token) {
  return crypto
    .createHash('sha256')
    .update(token)
    .digest('hex')
}

module.exports = createPasswordResetTokenHash
  