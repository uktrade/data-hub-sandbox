var contacts = require('../../../fixtures/v3/search/contact.json')
var contactFilter = require('../../../fixtures/v3/search/filter/contact-filter.json')
var contactWithAttributes = require('../../../fixtures/v3/search/contact-with-attributes.json')

exports.contacts = function (req, res) {
  contactsList = {
    'collectionTest': contactWithAttributes,
  }

  if (req.body.name === 'FilterByContacts' ||
    req.body.archived === 'false' ||
    req.body.archived === 'true' ||
    req.body.country === '87756b9a-5d95-e211-a939-e4115bead28a' ||
    req.body.uk_region === '934cd12a-6095-e211-a939-e4115bead28a') {
    return res.json(contactFilter)
  }

  res.json(contactsList[req.body.sortby] || contacts)
}
