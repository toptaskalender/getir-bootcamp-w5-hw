const mongoose                  = require('mongoose')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_SUB_CATEGORIES,
  PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY,
  PRODUCT_ENTITY_PRICE_CURRENCIES,
  PRODUCT_ENTITY_AMOUNT_UNITS
}                               = require('../validations/config')

const productSchema = new mongoose.Schema({
  name: {
    type                      : String,
    required                  : [true, 'A product must have a name field.']
  },

  category: {
    type                      : String,
    enum: {
      values                  : PRODUCT_CATEGORIES,
      message                 : `A product's category must be either ${PRODUCT_CATEGORIES.join(', ')}.`
    },
    required                  : [true, `A product must have a category.`]
  },

  subCategory: {
    type                      : String,
    enum: {
      values                  : PRODUCT_SUB_CATEGORIES,
      message                 : `A product's category must be either ${PRODUCT_SUB_CATEGORIES.join(', ')}.`
    },
    required                  : [true, `A product must have a subcategory.` ]
  },

  image: {
    type                      : String,
  },

  entityPrice: {
    type                      : Number,
    required                  : [true, 'A product must have an entity price.']
  },

  entityPriceCurrency: {
    type                      : String,
    default                   : PRODUCT_DEFAULT_ENTITY_PRICE_CURRENCY,
    enum: {
      values                  : PRODUCT_ENTITY_PRICE_CURRENCIES,
      message                 : `A product's currenct must be either ${PRODUCT_ENTITY_PRICE_CURRENCIES.join(', ')}.`
    },
    required                  : [true, `A product must have an entity price currency.` ]
  },

  entityAmount: {
    type                      : Number,
    required                  : [true, `A product must have an entity amount.`],
  },

  entityAmountUnit: {
    type                      : String,
    enum: {
      values                  : PRODUCT_ENTITY_AMOUNT_UNITS,
      message                 : `A product's currenct must be either ${PRODUCT_ENTITY_PRICE_CURRENCIES.join(', ')}.`
    },
    required                  : [true, `A product must have an entity amount unit.`],
  }

}, {
  timestamps: true,
  versionKey: false
})

productSchema.index({
  name: 1
}, { unique: true })

module.exports = mongoose.model('Product', productSchema)