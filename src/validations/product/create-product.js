const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_SUB_CATEGORIES,
  PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY,
  PRODUCT_ENTITY_PRICE_CURRENCIES,
  PRODUCT_ENTITY_AMOUNT_UNITS
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

  subCategory: Joi
    .string()
    .valid(...PRODUCT_SUB_CATEGORIES)
    .required()
    .error(createErrors),
  
  entityPrice: Joi
    .number()
    .required()
    .error(createErrors),

  entityPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY)
    .valid(...PRODUCT_ENTITY_PRICE_CURRENCIES)
    .required()
    .error(createErrors),

  entityAmount: Joi
    .number()
    .required()
    .error(createErrors),

  entityAmountUnit: Joi
    .string()
    .valid(...PRODUCT_ENTITY_AMOUNT_UNITS)
    .required()
    .error(createErrors)
  
})

module.exports = createProductValidation
