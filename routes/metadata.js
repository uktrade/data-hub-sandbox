var likelihoodToLand = require('../fixtures/metadata/likelihood-to-land.json')
var investmentInvestorType = require('../fixtures/metadata/likelihood-to-land.json')
var investmentInvolvement = require('../fixtures/metadata/investment-involvement')
var investmentSpecificProgramme = require('../fixtures/metadata/investment-specific-programme.json')
var investmentProjectStage = require('../fixtures/metadata/investment-project-stage.json')
var investmentBusinessActivity = require('../fixtures/metadata/investment-business-activity.json')
var investmentType = require('../fixtures/metadata/investment-type.json')
var investmentStrategicDriver = require('../fixtures/metadata/investment-strategic-driver.json')
var exportExperienceCategory = require('../fixtures/metadata/export-experience-category.json')
var orderServiceType = require('../fixtures/metadata/order-service-type.json')
var orderCancellationReason = require('../fixtures/metadata/order-cancellation-reason.json')
var omisMarket = require('../fixtures/metadata/omis-market.json')
var fdiValue = require('../fixtures/metadata/fdi-value.json')
var fdiType = require('../fixtures/metadata/fdi-type.json')
var salaryRange = require('../fixtures/metadata/salary-range.json')

exports.likelihoodToLand = function (req, res) {
    res.json(likelihoodToLand)
}

exports.investmentInvestorType = function (req, res) {
  res.json(investmentInvestorType)
}

exports.investmentSpecificProgramme = function (req, res) {
  res.json(investmentSpecificProgramme)
}

exports.investmentInvolvement = function (req, res) {
  res.json(investmentInvolvement)
}

exports.investmentProjectStage = function (req, res) {
  res.json(investmentProjectStage)
}

exports.investmentBusinessActivity = function (req, res) {
  res.json(investmentBusinessActivity)
}

exports.investmentType = function (req, res) {
  res.json(investmentType)
}

exports.investmentStrategicDriver = function (req, res) {
  res.json(investmentStrategicDriver)
}

exports.exportExperienceCategory = function (req, res) {
  res.json(exportExperienceCategory)
}

exports.orderServiceType = function (req, res) {
  res.json(orderServiceType)
}

exports.orderCancellationReason = function (req, res) {
  res.json(orderCancellationReason)
}

exports.omisMarket = function (req, res) {
  res.json(omisMarket)
}

exports.fdiValue = function (req, res) {
  res.json(fdiValue)
}

exports.fdiType = function (req, res) {
  res.json(fdiType)
}

exports.salaryRange = function (req, res) {
  res.json(salaryRange)
}
