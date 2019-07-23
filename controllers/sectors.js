const Sector = require('../models/sector')

function indexRoute(req, res, next){
  Sector.find()
    .then(sectors => res.json(sectors))
    .catch(next)
}

module.exports = {
  index: indexRoute
}
