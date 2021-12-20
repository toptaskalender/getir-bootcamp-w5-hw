const {
  getOne,
  updateOne,
  deleteOne
}                   = require('./base')
const {
  catchAsync
}                   = require('../utils/functions')
const {
  productService,
  commentService
}                   = require('../services')
const { AppError }  = require('../utils/classes')

const getComment    = getOne(commentService)
const updateComment = updateOne(commentService)
const deleteComment = deleteOne(commentService)

const createComment = catchAsync(async (req, res, next) => {
  const { id: userId }    = req.user
  const { id: productId } = req.params
  const { body }          = req

  const product           = await productService.findById(productId)
  if (!product) return next(new AppError(400, 'Cannot find a product with given id.'))

  const data              = Object.assign(body, { user: userId, product: productId })
  const comment           = await commentService.create(data)

  res.status(201).json({
    status: 'success',
    data: {
      data: comment
    }
  })
})

module.exports = {
  getComment,
  createComment,
  updateComment,
  deleteComment
}