const mongoose            = require('mongoose')
const { categorySchema }  = require('./schemas')

module.exports = mongoose.model('Category', categorySchema)