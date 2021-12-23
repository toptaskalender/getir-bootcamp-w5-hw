const { authService } = require('../services')
const {
  catchAsync,
  signToken,
  sendEmail,
  createPasswordResetTokenHash
}                     = require('../utils/functions')
const {
  AppError
}                     = require('../utils/classes')

const signUp = catchAsync(async (req, res) => {
  const { body: data } = req

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

const logIn = catchAsync(async (req, res) => {
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

const sendPasswordResetEmail = catchAsync(async (req, res) => {
  const { email } = req.body

  const user = await authService.findOne({ email })
  
  if (!user) return next(new AppError(400, 'Cannot find a user with given email. Please provide correct information.'))

  const passwordResetToken = user.setPasswordResetToken()

  await sendEmail({ req, email, passwordResetToken })
  await user.save({ validateBeforeSave: false })

  res.status(200).json({
    status: 'success',
    message: 'Password reset email successfully sent.'
  })
})

const resetPassword = catchAsync(async (req, res) => {
  const { token } = req.params
  const {
    password,
    passwordConfirm
  }               = req.body
  
  const passwordResetToken = createPasswordResetTokenHash(token)

  let user = await authService.findOne({
    passwordResetToken: passwordResetToken,
    passwordResetTokenExpiresAt: { $gte: Date.now() }
  })
  
  if (!user) return next(new AppError(400, 'Malformed password reset token.'))
  
  user.password         = password
  user.passwordConfirm  = passwordConfirm
  user = await user.save()

  const jwt = signToken(user.id)

  res.status(200).json({
    status: 'success',
    token: jwt,
    data: {
      data: user
    }
  })
})

const updatePassword = catchAsync(async (req, res) => {
  const { id }    = req.user
  const {
    currentPassword,
    password,
    passwordConfirm
  }               = req.body

  let user = await authService.findById(id, '+password')
  
  if (!user.isPasswordEqualToHash(currentPassword, user.password)) {
    return next(new AppError(400, 'Current password is not correct. Please provide correct information.'))
  }

  user.password         = password
  user.passwordConfirm  = passwordConfirm
  user                  = await user.save()
  const jwt             = signToken(user.id)

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
  logIn,
  sendPasswordResetEmail,
  resetPassword,
  updatePassword
}