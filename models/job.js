const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true},
  salaryMin: {type: Number},
  salaryMax: {type: Number},
  company: { type: mongoose.Schema.ObjectId, ref: 'Company', required: true },
  sectors: [{ type: mongoose.Schema.ObjectId, ref: 'Sector' }],
  applicants: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)
