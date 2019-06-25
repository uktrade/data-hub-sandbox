var announcementArticles = require('../fixtures/zendesk/announcement.js')

exports.announcement = function (req, res) {
    res.json(JSON.stringify(announcementArticles.announcement))
}
