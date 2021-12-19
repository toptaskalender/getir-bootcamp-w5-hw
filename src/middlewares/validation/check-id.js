const { AppError } = require('../../utils/classes')

async function checkId (req, res, next, id) {
  const regex     = /^[0-9a-fA-F]{24}$/
  const isValidId = regex.test(id)

  if (!isValidId) return next(new AppError(400, 'Invalid id parameter. Please provide correct information.'))

  next()
}

module.exports = checkId