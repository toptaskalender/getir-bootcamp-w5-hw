const Joi       = require('joi')
const {
  createErrors
}               = require('../../utils/functions')

const updateAddressValidation = Joi.object({
  label: Joi
    .string()
    .error(createErrors),
  
  street: Joi
    .string()
    .error(createErrors),
  
  city: Joi
    .string()
    .error(createErrors),
  
  province: Joi
    .string()
    .error(createErrors),

  zip: Joi
    .number()
    .error(createErrors),

  country: Joi
    .string()
    .error(createErrors)
  
})
  
module.exports = updateAddressValidation
