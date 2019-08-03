const User = require('../models/user')
const jwt = require('jsonwebtoken')

const { secret } = require('../config/environment')

function registerRoute(req, res, next){
  req.body.admin = false
  User.create(req.body)
    .then(() => res.status(201).json( { message: 'Registration successful'}))
    .catch(next)
}

function loginRoute(req, res, next){
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'unauthorized'})
      }
      const payload = {sub: user._id}
      const token = jwt.sign(payload, secret, { expiresIn: '12h' })
      res.json({
        token,
        message: `Welcome back ${user.fName}`
      })
    })
    .catch(next)
}

module.exports = {
  register: registerRoute,
  login: loginRoute
}
