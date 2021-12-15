const {
  catchAsync
}                   = require('../utils/functions')

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

module.exports = {
  createOne
}