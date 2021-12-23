const BaseService   = require('./base')
const { Category }  = require('../models')

class categoryService extends BaseService {
  async findSubcategories() {
    return this.model.aggregate([
      {
        $unwind: "$subcategories" 
      },
      {
        $group: {
          _id: '$subcategories',
        }
      },
      {
        $addFields: {
          name: '$_id',
        }
      },
      {
        $project: {
          _id: 0,
        }
      }
    ])
  }
}

module.exports = new categoryService(Category)