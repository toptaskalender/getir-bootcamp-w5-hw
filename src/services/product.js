const BaseService = require('./base')
const { Product } = require('../models')

class ProductService extends BaseService {}

module.exports = new ProductService(Product)