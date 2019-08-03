const router = require('express').Router()
const companyController = require('../controllers/companies')
const jobController = require('../controllers/jobs')
const sectorController = require('../controllers/sectors')
const userController = require('../controllers/users')

router.route('/companies')
  .get(companyController.index)

router.route('/jobs')
  .get(jobController.index)

router.route('/jobs/:id')
  .get(jobController.show)

router.route('/sectors')
  .get(sectorController.index)

router.route('/users')
  .get(userController.index)

module.exports = router
