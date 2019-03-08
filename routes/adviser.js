var advisers = require('../fixtures/adviser.json')
var autoCompleteAdvisor = require('../fixtures/autocomplete-adviser.json')
var singleAdviser = require('../fixtures/single-adviser.json')

exports.advisers = function (req, res) {
    if (req.query.autocomplete) {
        return res.json(autoCompleteAdvisor)
    }
    res.json(advisers)
}

exports.singleAdviser = function (req, res) {
    res.json(singleAdviser)
}
