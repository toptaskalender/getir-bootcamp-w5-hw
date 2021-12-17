const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const createAddressValidation = Joi.object({
  label: Joi
    .string()
    .required()
    .error(createErrors),
  
  street: Joi
    .string()
    .required()
    .error(createErrors),
  
  city: Joi
    .string()
    .required()
    .error(createErrors),
  
  province: Joi
    .string()
    .required()
    .error(createErrors),

  zip: Joi
    .number()
    .required()
    .error(createErrors),

  country: Joi
    .string()
    .required()
    .error(createErrors)
  
})
  
module.exports = createAddressValidation
