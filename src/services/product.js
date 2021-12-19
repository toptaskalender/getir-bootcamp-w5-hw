const BaseService = require('./base')
const { Product } = require('../models')

class ProductService extends BaseService {
  async findById(id, fieldBy) {
    return this.model
      .findById(id)
      .select(fieldBy)
      .populate({
        path: 'comments',
        select: 'user body title rating',
        populate : {
          path : 'user',
          select: 'firstName'
        }
      })
  }
}

module.exports = new ProductService(Product)