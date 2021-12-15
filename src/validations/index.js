const { 
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation
}                           = require('./auth')
const {
  createUserValidation
}                           = require('./user')

module.exports = {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,

  createUserValidation
}