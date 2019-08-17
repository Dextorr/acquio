const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  location: { type: String, required: true },
  cv: { type: String, required: true },
  linkedIn: { type: String }
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
