const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  street: {
    type        : String,
    required    : [true, 'An address must have a street name.']
  },

  city: {
    type        : String,
    required    : [true, 'An address must have a city.']
  },

  province: {
    type        : String,
    required    : [true, 'An address must have a province.']
  },

  zip: {
    type        : String,
    required    : [true, 'An address must have a zip code.']
  },

  country: {
    type        : String,
    required    : [true, 'An address must have a country.']
  }

})

module.exports = addressSchema