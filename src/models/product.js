const mongoose          = require('mongoose')
const { productSchema } = require('./schemas')

module.exports = mongoose.model('Product', productSchema)