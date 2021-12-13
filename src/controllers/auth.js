const { authService } = require('../services')
const {
  catchAsync,
  signToken
}                     = require('../utils/functions')
const {
  AppError
}                     = require('../utils/classes')

const signUp = catchAsync(async (req, res) => {
  const { body: data }  = req

  const user  = await authService.create(data)
  const jwt   = signToken(user.id)

  res.status(200).json({
    status: 'success',
    token: jwt,
    data: {
      data: user
    }
  })
})

const logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  const user = await authService.findOne({ email }, '+password')
  
  if (
    !user ||
    !(await user.isPasswordEqualToHash(password, user.password))
  ) {
    return next(new AppError(400, 'Email or password is wrong. Please provide correct information.'))
  }

  user.password = undefined
  const jwt     = signToken(user.id)

  res.status(200).json({
    status: 'success',
    token: jwt,
    data: {
      data: user
    }
  })
})

module.exports = {
  signUp,
  logIn
}