const Joi           = require('joi')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
  PRODUCT_CURRENCIES
}                   = require('../config')

const createProductValidation = Joi.object({
  name: Joi
    .string()
    .required()
    .messages({
      'string.base'   : 'Product name must be a string.',
      'any.required'  : 'Product name is a required field.',
    }),

  category: Joi
    .string()
    .valid(...PRODUCT_CATEGORIES)
    .required()
    .messages({
      'string.base'   : 'Product category must be a string.',
      'any.required'  : 'Product category is a required field.',
      'any.only'      : `Product category must be either ${PRODUCT_CATEGORIES.join(', ')}.`
    }),
  
  unitPrice: Joi
    .number()
    .required()
    .messages({
      'number.base'   : 'Product unit price must be a number.',
      'any.required'  : 'Product unit price is a required field.',
    }),

  unitPriceCurrency: Joi
    .string()
    .default(PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY)
    .valid(...PRODUCT_CURRENCIES)
    .required()
    .messages({
      'string.base'   : 'Product unit price currency must be a string.',
      'any.only'      : `Product unit price currency must be either ${PRODUCT_CURRENCIES.join(', ')}.`,
    })
  
})

module.exports = createProductValidation
