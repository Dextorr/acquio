const router = require('express').Router()
const companyController = require('../controllers/companies')
const jobController = require('../controllers/jobs')
const sectorController = require('../controllers/sectors')

router.route('/companies')
  .get(companyController.index)

router.route('/jobs')
  .get(jobController.index)

router.route('/sectors')
  .get(sectorController.index)

module.exports = router
