const mongoose = require('mongoose')

// Contact is embedded schema
// Name, Title, Phone, Email, Overview (optional)
const contactSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  title: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  overview: { type: String }
})

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  contact: contactSchema
})

companySchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'company'
})

companySchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Company', companySchema)
