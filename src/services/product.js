const BaseService = require('./base')
const { Product } = require('../models')

class ProductService extends BaseService {
  async findById(id, fieldBy) {
    return this.model
      .findById(id)
      .select(fieldBy)
      .populate({
        path: 'comments',
        select: 'user body title rating -product',
        populate : {
          path : 'user',
          select: 'firstName -_id'
        }
      })
  }
}

module.exports = new ProductService(Product)