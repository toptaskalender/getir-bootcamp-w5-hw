const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
  PRODUCT_CURRENCIES
}                   = require('../config')
const {
  createErrors
}                   = require('../../utils/functions')

const updateProductValidation = Joi.object({
  name: Joi
    .string()
    .error(createErrors),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .error(createErrors),
  
  unitPrice: Joi
    .number()
    .error(createErrors),

  unitPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY)
    .valid(...PRODUCT_CURRENCIES)
    .error(createErrors)
  
})

module.exports = updateProductValidation
