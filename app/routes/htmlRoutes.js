var connection = require("../../config/connection");
var express = require("express");

module.exports = function(app) {
  var path = require("path");

  app.use(express.static(path.join(__dirname, "../public")));

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
