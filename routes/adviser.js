var advisers = require('../fixtures/adviser.json')
var singleAdviser = require('../fixtures/single-adviser.json')

exports.advisers = function (req, res) {
    res.json(advisers)
}

exports.singleAdviser = function (req, res) {
    res.json(singleAdviser)
}
