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

  createAddressValidation,
  updateAddressValidation
}                           = require('./user')
const {
  createProductValidation,
  updateProductValidation
}                           = require('./product')
const {
  createCommentValidation,
  updateCommentValidation
}                           = require('./comment')
const {
  createCategoryValidation,
  updateCategoryValidation
}                           = require('./category')

module.exports = {
  signUpValidation,
  logInValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  updatePasswordValidation,

  createUserValidation,
  updateUserValidation,

  createAddressValidation,
  updateAddressValidation,
  
  createProductValidation,
  updateProductValidation,

  createCommentValidation,
  updateCommentValidation,

  createCategoryValidation,
  updateCategoryValidation
}