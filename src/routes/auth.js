const router    = require('express').Router()
const {
  validate
}               = require('../middlewares')
const {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation
}               = require('../validations')
const {
  signUp,
  logIn,
  sendPasswordResetEmail,
  resetPassword
}               = require('../controllers/auth')

router.route('/signup')
  .post(
    validate('body', signUpValidation),
    signUp
  )

router.route('/login')
  .post(
    validate('body', logInValidation),
    logIn
  )

router.route('/forgot-password')
  .post(
    validate('body', forgotPasswordValidation),
    sendPasswordResetEmail
  )

router.route('/reset-password/:token')
  .patch(
    validate('body', resetPasswordValidation),
    resetPassword
  )

module.exports = router