const mongoose                    = require('mongoose')
const bcryptjs                    = require('bcryptjs')
const crypto                      = require('crypto')
const { addressSchema }           = require('../nested')
const {
  USER_ROLES,
  USER_PASSWORD_PATTERN
}                                 = require('../../../validations/config')
const {
  createPasswordResetTokenHash
}                                 = require('../../../utils/functions')

const userSchema = new mongoose.Schema({
  firstName: {
    type                      : String,
    required                  : [true, 'A user must have a first name.']
  },

  lastName: {
    type                      : String,
    required                  : [true, 'A user must have a last name.']
  },

  email: {
    type                      : String,
    lowercase                 : true,
    required                  : [true, 'A user must have an email']
  },

  password: {
    type                      : String,
    select                    : false,
    validate: {
      validator: function(v) {
        return USER_PASSWORD_PATTERN.test(v)
      },
      message: 'Password must be 8-30 character long and only consist of numbers and letters.'
    },
    required                  : [true, 'A user must have an password.']
  },

  passwordConfirm: {
    type                      : String,
    validate: {
      validator: function(v) {
        return v === this.password
      },
      message: _ => `Please provide the same password as the former.`
    },
    required                  : [true, 'A user must confirm his password.']
  },

  role: {
    type                      : String,
    default                   : 'user',
    enum: {
      values                  : USER_ROLES,
      message                 : `A user's role must be either ${USER_ROLES.join(' ')}.`
    }   
  },

  addresses                   : [addressSchema],

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
    this.passwordChangedAt            = this.isNew ? undefined : Date.now() - 1000
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

module.exports = userSchema