const router      = require('express').Router()
const {
  verifyAuth,
  validate
}                 = require('../middlewares')
const {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation
}                 = require('../validations')
const {
  signUp,
  logIn,
  sendPasswordResetEmail,
  resetPassword,
  updatePassword
}                 = require('../controllers/auth')

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

router.route('/update-password')
  .patch(
    verifyAuth,
    validate('body', updatePasswordValidation),
    updatePassword
  )

module.exports = router