const { AppError } = require('../classes')

function constructAppError(err) {
  let msg;

  if (err.code === 11000) {
    const errorField = Object.keys(err.keyPattern)[0]

    msg = `${errorField[0].toUpperCase() + errorField.slice(1)} should be unique.`
  }
  else if (err.name === 'ValidationError') {
    const { errors }  = err
    const errorFields = Object.keys(errors)

    msg = errorFields.map(key => errors[key].message).join(' ')
  }

  return new AppError(400, msg)
}

module.exports = constructAppError