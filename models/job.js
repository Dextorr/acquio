const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company', required: true },
  sectors: [{ type: mongoose.Schema.ObjectId, ref: 'Sector' }]
})

module.exports = mongoose.model('Job', jobSchema)
