const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_SUB_CATEGORIES,
  PRODUCT_ENTITY_PRICE_CURRENCIES,
  PRODUCT_ENTITY_AMOUNT_UNITS
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

  subCategory: Joi
    .string()
    .valid(...PRODUCT_SUB_CATEGORIES)
    .error(createErrors),
  
  entityPrice: Joi
    .number()
    .error(createErrors),

  entityPriceCurrency: Joi
    .string()
    .valid(...PRODUCT_ENTITY_PRICE_CURRENCIES)
    .error(createErrors),

  entityAmount: Joi
    .number()
    .error(createErrors),

  entityAmountUnit: Joi
    .string()
    .valid(...PRODUCT_ENTITY_AMOUNT_UNITS)
    .error(createErrors),
  
})

module.exports = updateProductValidation
