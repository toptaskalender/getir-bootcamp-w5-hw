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

  res.status(200).json({
    status: 'success',
    data: {
      data: user 
    }
  })
})

const updateAddress = catchAsync(async (req, res, next) => {
  const { id }            = req.user
  const { id: addressId } = req.params
  const { body: data }    = req

  const updateData  = {}
  const fields      = Object.keys(data)

  for (let key of fields) {
    updateData[`addresses.$.${key}`] = data[key]
  }

  const user = await userService.findOneAndUpdate(
    { id, 'addresses._id': addressId },
    { $set: updateData }
  )

  if (!user) return next(new AppError(400, 'Cannot find an address with given id.'))

  res.status(200).json({
    status: 'success',
    data: {
      data: user
    }
  })
})

const deleteAddress = catchAsync(async (req, res, next) => {
  const { id }            = req.user
  const { id: addressId } = req.params

  const beforeUpdateAddresses = await userService.findById(id)
  const user                  = await userService.findByIdAndUpdate(id, { $pull: { addresses: { _id: addressId } } })
  const isAddressesModified   = beforeUpdateAddresses.addresses.length !== user.addresses.length

  if (!isAddressesModified) {
    return next(new AppError(400, 'Cannot find an address with given id.'))
  }

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
  deleteAddress,
  updateAddress,

  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}