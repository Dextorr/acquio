function errorHandler(err, req, res, next){
  console.log('I AM THE ERROR *****************************************', err)
  const errors = {}
  switch(err.name){

    case 'ValidationError':
      for (const key in err.errors){
        errors[key] = err.errors[key].message
      }
      return res.status(422).json(errors)

    case 'TokenExpiredError':
      errors.jwtExpired = 'Your session has expired, please log in again'
      return res.status(401).json(errors)

    case 'NonAdminUser':
      errors.adminOnly = 'User not authorized.'
      return res.status(401).json(errors)

    default:
      res.status(500).json(err.message)
  }
  next(err)
}

module.exports = errorHandler
