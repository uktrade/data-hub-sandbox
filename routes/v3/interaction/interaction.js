var interaction = require('../../../fixtures/v3/interaction/interaction.json')
var interactions = require('../../../fixtures/v3/interaction/interactions.json')
var interactionByInvestmentProjectId = require('../../../fixtures/v3/interaction/interaction-by-investment-project-id.json')
var interactionByCompanyId = require('../../../fixtures/v3/interaction/interaction-by-company-id.json')
var interactionByContactId = require('../../../fixtures/v3/interaction/interaction-by-contact-id.json')
var interactionCreate = require('../../../fixtures/v3/interaction/interaction-create.json')

state.interactionSubject = state.interactionSubject || []

exports.interactions = function (req, res) {
  if(req.query.contact_id) {
    return res.json(interactionByContactId)
  }

  if(req.query.company_id === '346f78a5-1d23-4213-b4c2-bf48246a13c3')
  {
    return res.json(interactionByCompanyId)
  }

  if(req.query.investment_project_id === '5d341b34-1fc8-4638-b4b1-a0922ebf401e')
  {
    return res.json(interactionByInvestmentProjectId)
  }

  res.json(interactions)
}

exports.interactionById = function (req, res) {
  if (state.interactionSubject) {
    return res.json(_.merge(interaction, {"subject": state.interactionSubject}))
  }
  res.json(interaction)
}

exports.interactionCreate = function (req, res) {
  if (req.body.subject) {
    state.interactionSubject = req.body.subject
  }
  res.json(interactionCreate)
}
