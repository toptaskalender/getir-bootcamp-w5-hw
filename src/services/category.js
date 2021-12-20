const BaseService   = require('./base')
const { Category }  = require('../models')

class categoryService extends BaseService {}

module.exports = new categoryService(Category)