const { constructAppError } = require('../../utils/functions')

function errorHandler(err, req, res, next) {
  const isDuplicateKeyError = err.code === 11000
  const isValidationError   = err.name === 'ValidationError'
  const isEmailSendingError = err.code === 'EAUTH'

  if (
    isDuplicateKeyError ||
    isValidationError ||
    isEmailSendingError
  ) {
    err = constructAppError(JSON.parse(JSON.stringify(err)));
  }

  if (err.isOperational) {
    res.status(err.statusCode).json({
      error: err,
      status: err.status,
      message: err.message,
      stack: err.stack
    })
  } else {
    console.error(err)
    res.status(500).json({
      error: err,
      status: 'error',
      message: 'Something went really wrong. 💥',
      stack: err.stack
    })
  }
}

module.exports = errorHandler