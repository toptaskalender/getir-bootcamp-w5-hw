const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
  PRODUCT_CURRENCIES
}                   = require('../config')

const updateProductValidation = Joi.object({
  name: Joi
    .string()
    .messages({
      'string.base'   : 'Product name must be a string.',
    }),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .messages({
      'string.base'   : 'Product category must be a string.',
      'any.only'      : `Product category must be either ${PRODUCT_CATEGORIES.join(', ')}.`
    }),
  
  unitPrice: Joi
    .number()
    .messages({
      'number.base'   : 'Product unit price must be a number.',
    }),

  unitPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY)
    .valid(...PRODUCT_CURRENCIES)
    .messages({
      'string.base'   : 'Product unit price currency must be a string.',
      'any.only'      : `Product unit price currency must be either ${PRODUCT_CURRENCIES.join(', ')}.`
    })
  
})

module.exports = updateProductValidation
