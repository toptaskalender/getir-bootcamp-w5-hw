const express         = require('express')
const path            = require('path')
const morgan          = require('morgan')
const {
  resLogWriteStream
}                     = require('./logs')
const {
  authRouter,
  usersRouter,
  productsRouter
}                     = require('./routes')
const {
  errorHandler,
  verifyAuth
}                     = require('./middlewares')
const {
  AppError
}                     = require('./utils/classes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('combined', { stream: resLogWriteStream }))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api/v1', authRouter)
app.use('/api/v1/users', verifyAuth, usersRouter)
app.use('/api/v1/products', productsRouter)

app.all('*', (req, _) => {
  throw new AppError(500, `${req.originalUrl} does not exist on our server.`)
})

app.use(errorHandler)

module.exports = app
