const {
  userService
}             = require('../../services')
const {
  AppError
}             = require('../../utils/classes')
const {
  catchAsync,
  verifyToken
}             = require('../../utils/functions')

const verifyAuth = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers

  if ( 
    !authorization ||
    !(authorization.split(' ')[0] === 'Bearer') ||
    !(authorization.split(' ')[1])
  ) {
    return next(new AppError(401, 'Unauthorizated request. Please log in.'))
  }

  const token       = authorization.split(' ')[1]
  const { id, iat } = verifyToken(token)
  const user        = await userService.findById(id)

  if (!user) {
    return next(new AppError(401, 'The user that the token belongs to is no longer existent.'))
  }

  if (user.isPasswordChangedAfterTokenIssued(iat)) {
    return next(new AppError(401, 'User\'s password has changed after token issued. Please log in again.'))
  }

  req.user = user

  next()
})

module.exports = verifyAuth