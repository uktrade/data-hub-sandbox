var allProjects = require('../../../fixtures/v3/investment/projects.json')
var project = require('../../../fixtures/v3/investment/project.json')

var allProjectsMap = {};
allProjects.results.forEach(function(project){
  allProjectsMap[project.id] = project
})

exports.investmentProjectById = function (req, res) {
  res.json(allProjectsMap[req.params.id] || project)
}

exports.investmentProjects = function (req, res) {
  res.json(allProjects)
}
