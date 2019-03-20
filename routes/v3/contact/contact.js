var contact = require('../../../fixtures/v3/contact/contact.json')
var contactById = require('../../../fixtures/v3/contact/contact-by-id.json')
var contactByIdWithNoDocument = require('../../../fixtures/v3/contact/contact-by-id-with-no-document.json')

exports.contact = function (req, res) {
  res.json(contact)
}

exports.contactById = function (req, res) {
  var contacts = {
    '5555d636-1d24-416a-aaf0-3fb220d59aaa': contactByIdWithNoDocument,
  }

  res.json(contacts[req.params.contactId] || contactById)
}
