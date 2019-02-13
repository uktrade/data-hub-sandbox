var featureFlag = require('../fixtures/v3/feature-flag.json')
var company = require('../fixtures/v3/company.json')
var companies = require('../fixtures/v3/search/company.json')
var interaction = require('../fixtures/v3/interaction.json')
var contacts = require('../fixtures/v3/search/contact.json')
var contact = require('../fixtures/v3/contact.json')
var singleContact = require('../fixtures/v3/single-contact.json')
var singleCompany = require('../fixtures/v3/single-company.json')
var singleInteraction = require('../fixtures/v3/single-interaction.json')
var contactInteraction = require('../fixtures/v3/contact-interaction.json')
var createInteraction = require('../fixtures/v3/create-interaction.json')
var events = require('../fixtures/v3/search/events.json')

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
  res.json(interaction)
}

exports.createInteraction = function (req, res) {
  res.json(createInteraction)
}

exports.singleInteraction = function (req, res) {
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
  res.json(singleCompany)
}

exports.events = function (req, res) {
  res.json(events)
}
