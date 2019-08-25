const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
  email: { type: String, required: 'Please provide an email address' },
  fName: { type: String, required: 'Please provide your full name' },
  lName: { type: String, required: 'Please provide your full name' },
  location: { type: String, required: 'Please provide your location' },
  cv: { type: String, required: 'Please provide your CV' }
})

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true},
  type: { type: String, required: true },
  salaryMin: {type: Number},
  salaryMax: {type: Number},
  company: { type: mongoose.Schema.ObjectId, ref: 'Company', required: true },
  sectors: [{ type: mongoose.Schema.ObjectId, ref: 'Sector' }],
  tempApplicants: [ applicantSchema ],
  active: { type: Boolean, required: true }
}, {
  timestamps: true
})

jobSchema.virtual('applicants', {
  ref: 'User',
  localField: '_id',
  foreignField: 'jobs'
})

jobSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Job', jobSchema)
