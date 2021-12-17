const path    = require('path')
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'images', 'products'))
  },
  filename: function (req, file, cb) {
    const { id }    = req.params
    const fileName  = id
    const fileExt   = path.extname(file.originalname)
    cb(null, fileName + fileExt)
  }
})

module.exports = storage