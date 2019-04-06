var connection = require("../../config/connection");

var path = require("path");

module.exports = function(app) {
  app.get("../public/home", function(req, res) {});
  app.get("../public/survey", function(req, res) {});
  app.get("*", function(req, res) {});
};
