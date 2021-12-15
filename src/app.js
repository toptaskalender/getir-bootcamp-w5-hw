const express         = require('express')
const morgan          = require('morgan')
const {
  resLogWriteStream
}                     = require('./logs')
const {
  authRouter,
  usersRouter
}                     = require('./routes')
const {
  errorHandler,
  verifyAuth
}                     = require('./middlewares')
const {
  AppError
}                     = require('./utils/classes')

const app = express()

app.use(express.json())
app.use(morgan('combined', { stream: resLogWriteStream }))

app.use('/api/v1', authRouter)
app.use(
  '/api/v1/users',
  verifyAuth,
  usersRouter
)

app.all('*', (req, res, next) => {
  return next(new AppError(500, `${req.originalUrl} does not exist on our server.`))
})

app.use(errorHandler)

module.exports = app
