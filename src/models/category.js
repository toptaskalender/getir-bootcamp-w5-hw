const mongoose  = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type            : String,
    required        : [true, 'A category must have a name.'] 
  },

  subCategories     : [String]

}, {
  versionKey: false
})

categorySchema.index({
  name: 1
})

module.exports = mongoose.model('Category', categorySchema)