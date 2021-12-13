const express     = require('express')
const {
  authRouter
}                 = require('./routes')
const {
  errorHandler
}                 = require('./middlewares')

const app = express()

app.use(express.json())

app.use('/', authRouter)

app.use(errorHandler)

module.exports = app
