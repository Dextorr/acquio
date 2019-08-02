const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: { type: String, required: true }
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
