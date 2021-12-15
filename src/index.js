const configure = require('./config')
const loaders   = require('./loaders')
const app       = require('./app')

configure()
loaders()

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listening on port   : ${process.env.APP_PORT}   🟢`)
})
