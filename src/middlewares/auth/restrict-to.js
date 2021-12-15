const {
  AppError
}             = require('../../utils/classes')

function restrictTo(...roles) {
  return (req, _, next) => {
    const { user }  = req
    const isAllowed = roles.includes(user.role)

    if (!isAllowed) {
      return next(new AppError(401, 'You are not allowed to perform this action.'))
    }

    next()
  }
}

module.exports = restrictTo