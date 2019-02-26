var contact = require('../../../fixtures/v3/contact/contact.json')
var contactById = require('../../../fixtures/v3/contact/contact-by-id.json')

exports.contact = function (req, res) {
  res.json(contact)
}

exports.contactById = function (req, res) {
  res.json(contactById)
}
