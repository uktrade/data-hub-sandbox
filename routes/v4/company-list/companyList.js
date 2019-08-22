var companyList = require("../../../fixtures/v4/company-list/company-list.json");

exports.companyList = function(req, res) {
  res.json(companyList);
};
