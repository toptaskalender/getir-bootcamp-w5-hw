const { 
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation
}                           = require('./auth')
const {
  createUserValidation,
  updateUserValidation
}                           = require('./user')
const {
  createProductValidation,
  updateProductValidation
}                           = require('./product')

module.exports = {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation,

  createUserValidation,
  updateUserValidation,
  
  createProductValidation,
  updateProductValidation
}