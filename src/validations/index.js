const { 
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation
}                           = require('./auth')
const {
  createUserValidation,
  updateUserValidation,
  createAddressValidation
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
  createAddressValidation,
  
  createProductValidation,
  updateProductValidation
}