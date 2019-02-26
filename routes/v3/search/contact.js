var contacts = require('../../../fixtures/v3/search/contact.json')

exports.contacts = function (req, res) {
  res.json(contacts)
}
