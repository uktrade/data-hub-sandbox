var companies = require('../../../fixtures/v3/search/company.json')
var companyWithAttributes = require('../../../fixtures/v3/search/company-with-attributes.json')

exports.companies = function (req, res) {
  companiesList = {
    'collectionTest': companyWithAttributes,
  }

  res.json(companiesList[req.body.sortby] || companies)
}
