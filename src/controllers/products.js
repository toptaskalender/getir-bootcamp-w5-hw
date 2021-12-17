const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}                 = require('./base')
const {
  productService
}                 = require('../services')
const {
  catchAsync
}                 = require('../utils/functions')

const getProducts   = getAll(productService)
const getProduct    = getOne(productService)
const createProduct = createOne(productService)
const updateProduct = updateOne(productService)
const deleteProduct = deleteOne(productService)

const uploadImage = catchAsync(async (req, res, next) => {
  const { id }                = req.params
  const { filename: image }   = req.file

  const doc = await productService.findByIdAndUpdate(id, { image })

  if (!doc) return next(new AppError(400, 'Cannot find a document with this id. Please provide correct information.'))

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  })
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage
}