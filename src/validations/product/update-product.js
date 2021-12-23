const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_SUB_CATEGORIES,
  PRODUCT_ENTITY_PRICE_CURRENCIES,
  PRODUCT_ENTITY_AMOUNT_UNITS
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const updateProductValidation = Joi.object({
  name: Joi
    .string()
    .error(joiErrorHandler),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .error(joiErrorHandler),

  subCategory: Joi
    .string()
    .valid(...PRODUCT_SUB_CATEGORIES)
    .error(joiErrorHandler),
  
  entityPrice: Joi
    .number()
    .error(joiErrorHandler),

  entityPriceCurrency: Joi
    .string()
    .valid(...PRODUCT_ENTITY_PRICE_CURRENCIES)
    .error(joiErrorHandler),

  entityAmount: Joi
    .number()
    .error(joiErrorHandler),

  entityAmountUnit: Joi
    .string()
    .valid(...PRODUCT_ENTITY_AMOUNT_UNITS)
    .error(joiErrorHandler),
  
})

module.exports = updateProductValidation
