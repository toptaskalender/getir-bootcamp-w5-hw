const { constructAppError } = require('../../utils/functions')

function errorHandler(err, req, res, next) {
  let error               = err
  const isCastError       = err.code === 11000
  const isValidationError = err.name === 'ValidationError'

  if (
    isCastError ||
    isValidationError
  ) {
    error = constructAppError(JSON.parse(JSON.stringify(err)));
  }

  if (error.isOperational) {
    res
      .status(error.statusCode)
      .json({
        error: error,
        status: error.status,
        message: error.msg,
      })
  } else {
    console.error(error)
    res
      .status(500)
      .json({
        error: error,
        status: 'error',
        message: 'Something went really wrong. 💥',
        stack: error.stack
      })
  }
}

module.exports = errorHandler