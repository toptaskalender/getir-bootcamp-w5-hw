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
const { 
  AppError,
  APIFeatures
}                   = require('../utils/classes')

const getComment    = getOne(commentService)
const updateComment = updateOne(commentService)
const deleteComment = deleteOne(commentService)

const getComments = catchAsync(async (req, res, next) => {
  const { id: product } = req.params
  const { query }       = req
  const features        = new APIFeatures(query)

  const queries = features.createQuery()
  if (product) queries.filterBy.product  = product

  const comments = await commentService.find(queries)

  res.status(200).json({
    status: 'success',
    results: comments.length,
    data: {
      data: comments
    }
  })
})

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
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment
}