const {
  catchAsync
}                 = require('../utils/functions')
const {
  AppError,
  APIFeatures
}                 = require('../utils/classes')

function getAll(service) {
  return catchAsync(async (req, res) => {
    const { query } = req
    const features  = new APIFeatures(query)

    const queries   = features.createQuery()
    const docs      = await service.find(queries)

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        data: docs
      }
    })
  })
}

function getOne(service) {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params

    const doc = await service.findById(id)
    if (!doc) return next(new AppError(400, 'Cannot find a document with this id. Please provide correct information.'))

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })
}

function createOne(service) {
  return catchAsync(async (req, res, next) => {
    const { body: data }  = req
  
    const doc = await service.create(data)
  
    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })
}

function updateOne(service) {
  return catchAsync(async (req, res, next) => {
    const { id }         = req.params
    const { body: data}  = req

    const doc = await service.findByIdAndUpdate(id, data)
    if (!doc) return next(new AppError(400, 'Cannot find a document with this id. Please provide correct information.'))

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    })
  })
}

function deleteOne(service) {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params

    const doc = await service.findByIdAndDelete(id)
    if (!doc) return next(new AppError(400, 'Cannot find a document with this id. Please provide correct information.'))

    res.status(204).json({
      status: 'success',
      data: null
    })
  })
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}