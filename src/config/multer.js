const path    = require('path')
const multer  = require('multer')
const {
  AppError
}             = require('../utils/classes')

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

function fileFilter (req, file, cb) {
  const isFileImage = file.mimetype.startsWith('image/')
  
  if (!isFileImage) {
    return cb(new AppError(400, 'You can only upload images.'))
  }

  cb(null, true)
}

module.exports = {
  storage,
  fileFilter
}