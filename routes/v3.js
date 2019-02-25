var featureFlag = require('../fixtures/v3/feature-flag.json')
var company = require('../fixtures/v3/company.json')
var archivedCompany = require('../fixtures/v3/archived-company.json')
var companies = require('../fixtures/v3/search/company.json')
var interaction = require('../fixtures/v3/interaction.json')
var interactionByInvestmentProjectId = require('../fixtures/v3/interaction-by-investment-project-id.json')
var interactionByCompanyId = require('../fixtures/v3/interaction-by-company-id.json')
var contacts = require('../fixtures/v3/search/contact.json')
var contact = require('../fixtures/v3/contact.json')
var singleContact = require('../fixtures/v3/single-contact.json')
var singleCompany = require('../fixtures/v3/single-company.json')
var singleInteraction = require('../fixtures/v3/single-interaction.json')
var contactInteraction = require('../fixtures/v3/contact-interaction.json')
var singleCompanyWithInvestment1 = require('../fixtures/v3/single-company-with-investment-1.json')
var singleCompanyWithInvestment2 = require('../fixtures/v3/single-company-with-investment-2.json')
var createInteraction = require('../fixtures/v3/create-interaction.json')
var events = require('../fixtures/v3/search/events.json')
var investmnetPorject = require('../fixtures/v3/search/investment-project.json')
var singleInvestmnetPorject = require('../fixtures/v3/single-investment-project.json')

state.interactionSubject = state.interactionSubject || []

exports.featureFlag = function (req, res) {
    res.json(featureFlag)
}

exports.company = function (req, res) {
  res.json(company)
}

exports.companies = function (req, res) {
  res.json(companies)
}

exports.interaction = function (req, res) {
  if(req.query.contact_id) {
    return res.json(contactInteraction)
  }

  if(req.query.company_id === '346f78a5-1d23-4213-b4c2-bf48246a13c3')
  {
    return res.json(interactionByCompanyId)
  }

  if(req.query.investment_project_id === '00086bb2-c5ee-4bfb-998f-0b417eafdd3e')
  {
    return res.json(interactionByInvestmentProjectId)
  }

  res.json(interaction)
}

exports.createInteraction = function (req, res) {
  if (req.body.subject) {
    state.interactionSubject = req.body.subject
  }
  res.json(createInteraction)
}

exports.singleInteraction = function (req, res) {
  if (state.interactionSubject) {
    return res.json(_.merge(singleInteraction, {"subject": state.interactionSubject}))
  }
  res.json(singleInteraction)
}

exports.contacts = function (req, res) {
  res.json(contacts)
}

exports.contact = function (req, res) {
  res.json(contact)
}

exports.singleContact = function (req, res) {
  res.json(singleContact)
}

exports.singleCompany = function (req, res) {
  if(req.params.companyId === '4cd4128b-1bad-4f1e-9146-5d4678c6a018') {
    return res.json(archivedCompany)
  }

  if(req.params.companyId === '0f5216e0-849f-11e6-ae22-56b6b6499611') {
    return res.json(singleCompanyWithInvestment1)
  }

  if(req.params.companyId === 'a73efeba-8499-11e6-ae22-56b6b6499611') {
    return res.json(singleCompanyWithInvestment2)
  }

  res.json(singleCompany)
}

exports.events = function (req, res) {
  res.json(events)
}

exports.investmnetPorject = function (req, res) {
  res.json(investmnetPorject)
}

exports.singleInvestmnetPorject = function (req, res) {
  res.json(singleInvestmnetPorject)
}
