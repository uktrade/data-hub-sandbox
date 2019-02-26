var companies = require('../../../fixtures/v3/search/company.json')

exports.companies = function (req, res) {
  res.json(companies)
}
