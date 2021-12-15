const mongoose                  = require('mongoose')
const {
  PRODUCT_CATEGORIES,
  PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
  PRODUCT_CURRENCIES,

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
    required                  : true
  },

  image: {
    type                      : String,
  },

  unitPrice: {
    type                      : Number,
    required                  : [true, 'A product must have an unit price.']
  },

  unitPriceCurrency: {
    type                      : String,
    default                   : PRODUCT_DEFAULT_UNIT_PRICE_CURRENCY,
    enum: {
      values                  : PRODUCT_CURRENCIES,
      message                 : `A product's currenct must be either ${PRODUCT_CURRENCIES.join(', ')}.`
    }
  }

}, {
  timestamps: true,
  versionKey: false
})

productSchema.index({
  name: 1
}, { unique: true })

module.exports = mongoose.model('Product', productSchema)