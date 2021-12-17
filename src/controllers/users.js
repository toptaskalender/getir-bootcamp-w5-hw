const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}             = require('./base')
const {
  userService
}             = require('../services')
const {
  catchAsync
}             = require('../utils/functions')
const {
  AppError
}             = require('../utils/classes')

const getMe = catchAsync(async (req, res, next) => {
  const { id }  = req.user
  const user    = await userService.findById(id)

  if (!user) return next(new AppError(400, 'Cannot find a user with that id.'))
  
  res.status(200).json({
    status: 'success',
    data: {
      data: user
    }
  })
})

const createAddress = catchAsync(async (req, res, next) => {
  const { id }          = req.user
  const { body: data }  = req

  const user = await userService.findByIdAndUpdate(id, { $push: { addresses: data } })

  if (!user) return next(new AppError(400, 'Cannot find a user with this id.'))

  res.status(200).json({
    status: 'success',
    data: {
      data: user 
    }
  })
})

const getUsers    = getAll(userService)
const getUser     = getOne(userService)
const createUser  = createOne(userService)
const updateUser  = updateOne(userService)
const deleteUser  = deleteOne(userService)

module.exports = {
  getMe,
  createAddress,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}