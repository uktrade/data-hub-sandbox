var interaction = require('../../../fixtures/v3/interaction/interaction.json')
var interactionWithDocumentLink = require('../../../fixtures/v3/interaction/interaction-with-document-link.json')
var interactionWithoutDocumentLink = require('../../../fixtures/v3/interaction/interaction-without-document-link.json')
var interactions = require('../../../fixtures/v3/interaction/interactions.json')
var interactionByInvestmentProjectId = require('../../../fixtures/v3/interaction/interaction-by-investment-project-id.json')
var interactionByCompanyId = require('../../../fixtures/v3/interaction/interaction-by-company-id.json')
var interactionByContactId = require('../../../fixtures/v3/interaction/interaction-by-contact-id.json')
var interactionCreate = require('../../../fixtures/v3/interaction/interaction-create.json')
var interactionDraftFutureMeeting = require('../../../fixtures/v3/interaction/interaction-draft-future-meeting.json')
var interactionDraftPastMeeting = require('../../../fixtures/v3/interaction/interaction-draft-past-meeting.json')

state.interactionSubject = state.interactionSubject || []

exports.interactions = function (req, res) {
  if(req.query.contact_id) {
    return res.json(interactionByContactId)
  }

  if(req.query.company_id === '346f78a5-1d23-4213-b4c2-bf48246a13c3') {
    return res.json(interactionByCompanyId)
  }

  if(req.query.investment_project_id === '5d341b34-1fc8-4638-b4b1-a0922ebf401e') {
    return res.json(interactionByInvestmentProjectId)
  }

  res.json(interactions)
}

exports.interactionById = function (req, res) {
  var interactions = {
    'ec4a46ef-6e50-4a5c-bba0-e311f0471312': interactionWithDocumentLink,
    '0dcb3748-c097-4f20-b84f-0114bbb1a8e0': interactionWithoutDocumentLink,
    '999c12ee-91db-4964-908e-0f18ce823096': interactionDraftFutureMeeting,
    '888c12ee-91db-4964-908e-0f18ce823096': interactionDraftPastMeeting,
  }

  if (state.interactionSubject) {
    return res.json(_.merge(interactions[req.params.interactionId] || interaction, {"subject": state.interactionSubject}))
  }

  res.json(interactions[req.params.interactionId] || interaction)
}

exports.interactionCreate = function (req, res) {
  if (req.body.subject) {
    state.interactionSubject = req.body.subject
  }
  res.json(interactionCreate)
}
