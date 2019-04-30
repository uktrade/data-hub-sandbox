var companiesNoResults = require('../../../fixtures/v4/company/companies-no-results.json')
var companyArchivedSubsidiaries = require('../../../fixtures/v4/company/company-archived-subsidiaries.json')
var company = require('../../../fixtures/v4/company/company.json')
var companyArchived = require('../../../fixtures/v4/company/company-archived.json')
var companyDnBCorp = require('../../../fixtures/v4/company/company-dnb-corp.json')
var companyLambdaPlc = require('../../../fixtures/v4/company/company-lambda-plc.json')
var companyMarsExportsLtd = require('../../../fixtures/v4/company/company-mars-exports-ltd.json')
var companyMinimallyMinimal = require('../../../fixtures/v4/company/company-minimally-minimal.json')
var companyOneListCorp = require('../../../fixtures/v4/company/company-one-list-corp.json')
var companyWithInvestment1 = require('../../../fixtures/v4/company/company-with-investment-1.json')
var companyWithInvestment2 = require('../../../fixtures/v4/company/company-with-investment-2.json')
var companyWithContacts = require('../../../fixtures/v4/company/company-with-contacts.json')

var nolargeCapitalProfile = require('../../../fixtures/v4/company/large-capital-profile-empty.json')
var largeCapitalProfile = require('../../../fixtures/v4/company/large-capital-profile.json')

exports.largeInvestorProfile = function (req, res) {
  // One List Corp should have a "Large capital investor profile".
  if(req.query.investor_company_id === "375094ac-f79a-43e5-9c88-059a7caa17f0") {
    return res.json(largeCapitalProfile)
  }
  res.json(nolargeCapitalProfile)
}

exports.largeInvestorProfilePatched = function (req, res) {
  res.json(largeCapitalProfile)
}

exports.companies = function (req, res) {
  var subsidiaries = {
    '346f78a5-1d23-4213-b4c2-bf48246a13c3': companyArchivedSubsidiaries,
  }

  res.json(subsidiaries[req.query.global_headquarters_id] || companiesNoResults)
}

exports.company = function (req, res) {
  var companies = {
    '346f78a5-1d23-4213-b4c2-bf48246a13c3': companyArchived,
    'cc7e2f19-7251-4a41-a27a-f98437720531': companyDnBCorp,
    '0fb3379c-341c-4da4-b825-bf8d47b26baa': companyLambdaPlc,
    'b2c34b41-1d5a-4b4b-9249-7c53ff2868dd': companyMarsExportsLtd,
    '149475d4-13a0-e511-88b6-e4115bead28a': companyMinimallyMinimal,
    '375094ac-f79a-43e5-9c88-059a7caa17f0': companyOneListCorp,
    '0f5216e0-849f-11e6-ae22-56b6b6499611': companyWithInvestment1,
    'a73efeba-8499-11e6-ae22-56b6b6499611': companyWithInvestment2,
    '0f5216e0-849f-11e6-ae22-56b6b6499622': companyWithContacts,
  }

  res.json(companies[req.params.companyId] || company)
}

