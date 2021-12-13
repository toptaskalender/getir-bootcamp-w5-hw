const mongoose          = require('mongoose')
const bcryptjs          = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type              : String,
    lowercase         : true,
    required          : true
  },

  password: {
    type              : String,
    minlength         : 8,
    select            : false,
    required          : true
  },

  passwordConfirm: {
    type              : String,
    validate: {
      validator: function(v) {
        return v === this.password
      },
      message: _ => `Please provide the same password as the former.`
    },
    required          : true
  }
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

userSchema.pre('save', async function(next) {
  if ( !this.isDirectModified('password') ) {
    next()
  }

  this.password         = await bcryptjs.hash(this.password, 10)
  this.passwordConfirm  = undefined

  next()
})

userSchema.post('save', function(doc) {
  doc.password = undefined
})

module.exports = mongoose.model('User', userSchema)