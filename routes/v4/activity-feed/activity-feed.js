var activities = require('../../../fixtures/v4/activity-feed/activities.json')
var noActivities = require('../../../fixtures/v4/activity-feed/no-activities.json')

exports.activityFeed = function (req, res) {
  var term = req.body.query.bool.filter[0].term;

  if (term && term['object.attributedTo.id'] === 'dit:DataHubCompany:0f5216e0-849f-11e6-ae22-56b6b6499611') {
    return res.json(noActivities)
  }

  res.json(activities)
}
