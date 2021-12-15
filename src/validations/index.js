const { 
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation
}                           = require('./auth')
const {
  createUserValidation
}                           = require('./user')
const {
  createProductValidation
}                           = require('./product')

module.exports = {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,

  createUserValidation,
  
  createProductValidation
}