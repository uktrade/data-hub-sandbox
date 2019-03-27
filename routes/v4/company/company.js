var company = require('../../../fixtures/v4/company/company.json')
var companyArchived = require('../../../fixtures/v4/company/company-archived.json')
var companyWithInvestment1 = require('../../../fixtures/v4/company/company-with-investment-1.json')
var companyWithInvestment2 = require('../../../fixtures/v4/company/company-with-investment-2.json')
var companyDnBCorp = require('../../../fixtures/v4/company/company-dnb-corp.json')
var companyOneListCorp = require('../../../fixtures/v4/company/company-one-list-corp.json')

var nolargeCapitalProfile = require('../../../fixtures/v4/company/large-capital-profile-empty.json')
var largeCapitalProfile = require('../../../fixtures/v4/company/large-capital-profile.json')

exports.largeInvestorProfile = function (req, res) {
  // One List Corp should have a "Large capital investor profile".
  if(req.query.investor_company_id === "375094ac-f79a-43e5-9c88-059a7caa17f0") {
    return res.json(largeCapitalProfile)
  }
  res.json(nolargeCapitalProfile)
}

exports.company = function (req, res) {
  var companies = {
    '346f78a5-1d23-4213-b4c2-bf48246a13c3': companyArchived,
    '0f5216e0-849f-11e6-ae22-56b6b6499611': companyWithInvestment1,
    'a73efeba-8499-11e6-ae22-56b6b6499611': companyWithInvestment2,
    'cc7e2f19-7251-4a41-a27a-f98437720531': companyDnBCorp,
    '375094ac-f79a-43e5-9c88-059a7caa17f0': companyOneListCorp,
  }

  res.json(companies[req.params.companyId] || company)
}

