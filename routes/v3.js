var featureFlag = require('../fixtures/v3/feature-flag.json')
var company = require('../fixtures/v3/company.json')
var interaction = require('../fixtures/v3/interaction.json')

exports.featureFlag = function (req, res) {
    res.json(featureFlag)
}

exports.company = function (req, res) {
  res.json(company)
}

exports.interaction = function (req, res) {
  res.json(interaction)
}
