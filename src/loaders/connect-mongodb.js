const mongoose  = require('mongoose')

async function connectMongoDB() {
  try {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectMongoDB

