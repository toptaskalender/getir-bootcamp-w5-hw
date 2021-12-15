const {
  createOne
}                 = require('./base')
const {
  productService
}                 = require('../services')
const {
  catchAsync
}                 = require('../utils/functions')

const getProducts = catchAsync(async (req, res, next) => {
  const products = await productService.find()

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      data: products
    }
  })
})

const createProduct = createOne(productService)

module.exports = {
  getProducts,
  createProduct
}