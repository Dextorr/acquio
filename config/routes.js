const router = require('express').Router()
const companyController = require('../controllers/companies')
const jobController = require('../controllers/jobs')
const sectorController = require('../controllers/sectors')
const userController = require('../controllers/users')
const authController = require('../controllers/auth')
const { secureRoute, adminRoute } = require('../lib/secureRoute')

router.route('/companies')
  .get(secureRoute, adminRoute, companyController.index)
  .post(companyController.create)

router.route('/jobs')
  .get(jobController.index)

router.route('/jobs/:id')
  .get(jobController.show)

router.route('/sectors')
  .get(sectorController.index)

router.route('/users')
  .get(secureRoute, adminRoute, userController.index)

router.route('/users/:id')
  .get(secureRoute, adminRoute, userController.show)

router.route('/profile')
  .get(secureRoute, userController.profile)

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

module.exports = router
