const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_SUB_CATEGORIES,
  PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY,
  PRODUCT_ENTITY_PRICE_CURRENCIES,
  PRODUCT_ENTITY_AMOUNT_UNITS
}                   = require('../config')
const {
  joiErrorHandler
}                   = require('../../utils/functions')

const createProductValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .error(joiErrorHandler),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .required()
    .error(joiErrorHandler),

  subCategory: Joi
    .string()
    .valid(...PRODUCT_SUB_CATEGORIES)
    .required()
    .error(joiErrorHandler),
  
  entityPrice: Joi
    .number()
    .required()
    .error(joiErrorHandler),

  entityPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY)
    .valid(...PRODUCT_ENTITY_PRICE_CURRENCIES)
    .required()
    .error(joiErrorHandler),

  entityAmount: Joi
    .number()
    .required()
    .error(joiErrorHandler),

  entityAmountUnit: Joi
    .string()
    .valid(...PRODUCT_ENTITY_AMOUNT_UNITS)
    .required()
    .error(joiErrorHandler)
  
})

module.exports = createProductValidation
