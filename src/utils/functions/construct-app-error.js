const { AppError } = require('../classes')

function constructAppError(err) {
  let statusCode, msg

  if (err.code === 11000) {
    const errorField = Object.keys(err.keyPattern)[0]

    statusCode  = 400
    msg         = `${errorField[0].toUpperCase() + errorField.slice(1)} should be unique.`
  }
  else if (err.name === 'ValidationError') {
    const { errors }  = err
    const errorFields = Object.keys(errors)

    statusCode  = 400
    msg         = errorFields.map(key => errors[key].message).join(' ')
  }
  else if (err.code === 'EAUTH') {

    statusCode  = 500
    msg         = 'Cannot send password reset email.'
  }

  return new AppError(statusCode, msg)
}

module.exports = constructAppError