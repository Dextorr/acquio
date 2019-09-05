const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: { type: String, required: 'Please provide an email address', unique: 'That email address has already been registered.' },
  password: { type: String, required: 'Please provide a password' },
  fName: { type: String, required: 'Please provide your full name' },
  lName: { type: String, required: 'Please provide your full name' },
  location: { type: String, required: 'Please provide your location' },
  statement: { type: String },
  portfolio: { type: String },
  github: { type: String },
  linkedIn: { type: String },
  phone: { type: String },
  jobs: [{ type: mongoose.Schema.ObjectId, ref: 'Job' }],
  admin: { type: Boolean, required: true }
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordsMath(next) {
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)
