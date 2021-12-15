const {
  userService
}             = require('../services')
const {
  catchAsync
}             = require('../utils/functions')

const getMe = catchAsync(async (req, res, next) => {
  const { id }  = req.user
  const user    = await userService.findById(id)

  if (!user) {
    return next(new AppError(400, 'Cannot find a user with that id.'))
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: user
    }
  })
})

module.exports = {
  getMe
}