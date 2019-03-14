var allProjects = require('../../../fixtures/v3/investment/projects.json')

var allProjectsMap = {};
allProjects.results.forEach(function(project){
  allProjectsMap[project.id] = project
})

exports.investmentProjectById = function (req, res) {
  res.json(allProjectsMap[req.params.id])
}

exports.investmentProjects = function (req, res) {
  res.json(allProjects)
}
