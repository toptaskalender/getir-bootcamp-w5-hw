const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
  PRODUCT_CURRENCIES
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const createProductValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(createErrors),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .required()
    .error(createErrors),
  
  unitPrice: Joi
    .number()
    .required()
    .error(createErrors),

  unitPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY)
    .valid(...PRODUCT_CURRENCIES)
    .required()
    .error(createErrors)
  
})

module.exports = createProductValidation
