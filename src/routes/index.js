const authRouter        = require('./auth')
const usersRouter       = require('./users')
const productsRouter    = require('./products')
const categoriesRouter  = require('./categories')
const commentsRouter    = require('./comments')

module.exports = {
  authRouter,
  usersRouter,
  productsRouter,
  categoriesRouter,
  commentsRouter
}