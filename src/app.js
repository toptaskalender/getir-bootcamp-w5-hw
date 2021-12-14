const express     = require('express')
const {
  authRouter
}                 = require('./routes')
const {
  errorHandler
}                 = require('./middlewares')
const {
  AppError
}                 = require('./utils/classes')

const app = express()

app.use(express.json())
app.use('/api/v1', authRouter)

app.all('*', (req, res, next) => {
  return next(new AppError(500, `${req.originalUrl} does not exist on our server.`))
})

app.use(errorHandler)

module.exports = app
