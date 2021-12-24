const mongoose          = require('mongoose')
const {
  MAX_COMMENT_CHARACTER
}                       = require('../../../validations/config')

const commentSchema = new mongoose.Schema({
  product: {
    type                      : mongoose.Schema.Types.ObjectId,
    ref                       : 'Product',
    required                  : [true, 'A comment must belong to a product.']
  },

  user: {
    type                      : mongoose.Schema.Types.ObjectId,
    ref                       : 'User',
    required                  : [true, 'A comment must belong to an user.']
  },

  title: {
    type                      : String,
    required                  : [true, 'A comment must have a title.'],
  },

  body: {
    type                      : String,
    maxlength                 : [MAX_COMMENT_CHARACTER, `A comment must be less than ${MAX_COMMENT_CHARACTER} charecter long.`],
    required                  : [true, 'A comment must have a body.'] 
  },

  rating: {
    type                      : Number,
    min                       : 1,
    max                       : 5
  }

}, {
  timestamps: true,
  versionKey: false
})

module.exports = commentSchema