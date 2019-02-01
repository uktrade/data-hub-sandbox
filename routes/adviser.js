var adviser = require('../fixtures/adviser.json')

exports.adviser = function (req, res) {
    res.json(adviser)
}
