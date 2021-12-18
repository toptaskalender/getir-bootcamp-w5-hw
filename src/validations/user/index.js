const createUserValidation    = require('./create-user')
const updateUserValidation    = require('./update-user')

const createAddressValidation = require('./create-address')
const updateAddressValidation = require('./update-address')

module.exports = {
  createUserValidation,
  updateUserValidation,
  
  createAddressValidation,
  updateAddressValidation
}