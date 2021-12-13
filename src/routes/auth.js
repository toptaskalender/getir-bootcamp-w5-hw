const router    = require('express').Router()
const {
  validate
}               = require('../middlewares')
const {
  signUpValidation,
  logInValidation
}               = require('../validations')
const {
  signUp,
  logIn
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

module.exports = router