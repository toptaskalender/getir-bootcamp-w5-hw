const fs    = require('fs')
const path  = require('path')

const resLogWriteStream = fs.createWriteStream(
  path.join(__dirname, 'response.log'),
  { flags: 'a' }
)

module.exports = {
  resLogWriteStream
}