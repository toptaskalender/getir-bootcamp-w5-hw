const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const updateAddressValidation = Joi.object({
  label: Joi
    .string()
    .error(joiErrorHandler),
  
  street: Joi
    .string()
    .error(joiErrorHandler),
  
  city: Joi
    .string()
    .error(joiErrorHandler),
  
  province: Joi
    .string()
    .error(joiErrorHandler),

  zip: Joi
    .number()
    .error(joiErrorHandler),

  country: Joi
    .string()
    .error(joiErrorHandler)
  
})
  
module.exports = updateAddressValidation
