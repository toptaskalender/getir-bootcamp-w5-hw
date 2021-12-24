const Joi       = require('joi')
const {
  joiErrorHandler
}               = require('../../utils/functions')

const createAddressValidation = Joi.object({
  label: Joi
    .string()
    .default('Home')
    .required()
    .error(joiErrorHandler),
  
  street: Joi
    .string()
    .required()
    .error(joiErrorHandler),
  
  city: Joi
    .string()
    .required()
    .error(joiErrorHandler),
  
  province: Joi
    .string()
    .required()
    .error(joiErrorHandler),

  zip: Joi
    .number()
    .required()
    .error(joiErrorHandler),

  country: Joi
    .string()
    .required()
    .error(joiErrorHandler)
  
})
  
module.exports = createAddressValidation
