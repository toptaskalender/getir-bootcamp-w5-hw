const mongoose          = require('mongoose')
const { commentSchema } = require('./schemas')

module.exports = mongoose.model('Comment', commentSchema)