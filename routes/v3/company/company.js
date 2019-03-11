var company = require('../../../fixtures/v3/company/company.json')
var companies = require('../../../fixtures/v3/company/companies.json')
var companyArchived = require('../../../fixtures/v3/company/company-archived.json')
var companyWithInvestment1 = require('../../../fixtures/v3/company/company-with-investment-1.json')
var companyWithInvestment2 = require('../../../fixtures/v3/company/company-with-investment-2.json')
var companyOneListCorp = require('../../../fixtures/v3/company/company-one-list-corp.json')

exports.companies = function (req, res) {
  res.json(companies)
}

exports.company = function (req, res) {
  var companies = {
    '4cd4128b-1bad-4f1e-9146-5d4678c6a018': companyArchived,
    '0f5216e0-849f-11e6-ae22-56b6b6499611': companyWithInvestment1,
    'a73efeba-8499-11e6-ae22-56b6b6499611': companyWithInvestment2,
    '375094ac-f79a-43e5-9c88-059a7caa17f0': companyOneListCorp,
  }

  res.json(companies[req.params.companyId] || company)
}
