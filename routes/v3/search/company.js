var companies = require('../../../fixtures/v3/search/company.json')
var companyWithAttributes = require('../../../fixtures/v3/search/company-with-attributes.json')
var companyFilterByName = require('../../../fixtures/v3/search/filter/company-filter-by-name.json')

exports.companies = function (req, res) {
  companiesList = {
    'collectionTest': companyWithAttributes,
  }

  if (req.body.name || req.body.archived || req.body.country || req.body.uk_region) {
    return res.json(companyFilterByName)
  }

  res.json(companiesList[req.body.sortby] || companies)
}
