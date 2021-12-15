const mongoose                    = require('mongoose')
const bcryptjs                    = require('bcryptjs')
const crypto                      = require('crypto')
const {
  createPasswordResetTokenHash
}                                 = require('../utils/functions')

const userSchema = new mongoose.Schema({
  email: {
    type                      : String,
    lowercase                 : true,
    required                  : true
  },

  password: {
    type                      : String,
    minlength                 : 8,
    select                    : false,
    required                  : true
  },

  passwordConfirm: {
    type                      : String,
    validate: {
      validator: function(v) {
        return v === this.password
      },
      message: _ => `Please provide the same password as the former.`
    },
    required                  : true
  },

  passwordResetToken          : String,

  passwordResetTokenExpiresAt : Date,

  passwordChangedAt           : Date
}, {
  timestamps: true,
  versionKey: false
})

userSchema.index({
  email: 1
}, { unique: true })

userSchema.methods.isPasswordEqualToHash = function(password, hash) {
  return bcryptjs.compare(password, hash)
}

userSchema.methods.setPasswordResetToken = function() {
  const passwordResetToken          = crypto.randomBytes(32).toString('hex')
  const passwordResetTokenHash      = createPasswordResetTokenHash(passwordResetToken)

  this.passwordResetToken           = passwordResetTokenHash
  this.passwordResetTokenExpiresAt  = Date.now() + 10 * 60 * 1000;

  return passwordResetToken
}

userSchema.methods.isPasswordChangedAfterTokenIssued = function(issuedAt) {
  const issuedAtInSec         = issuedAt * 1000
  const passwordChangeAtInSec = new Date(this.passwordChangedAt).getTime()

  return passwordChangeAtInSec > issuedAtInSec
}

userSchema.pre('save', async function(next) {
  if ( this.isDirectModified('password') ) {
    this.password                     = await bcryptjs.hash(this.password, 10)
    this.passwordChangedAt            = this.isNew ? undefined : Date.now() - 10
    this.passwordConfirm              = undefined
    this.passwordResetToken           = undefined
    this.passwordResetTokenExpiresAt  = undefined

    return next()
  }

  next()
})

userSchema.post('save', function(doc) {
  doc.password = undefined
})

module.exports = mongoose.model('User', userSchema)