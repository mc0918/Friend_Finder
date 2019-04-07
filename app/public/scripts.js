//var connection = require("../../config/connection");

$(document).ready(function() {
  console.log("redy");
  var slider = $("#calculatorSlider");
  var answer = $("#userAnswerOne");
  var survey = {
    form1: {
      active: true,
      response: 0
    }
  };

  function calculate(response, value) {
    answer.text(Math.round(value));
  }

  slider.on("input change", function(e) {
    if (survey.form1.active) {
      calculate(survey.form1.response, $(this).val());
      survey.form1.response = $(this).val();
    }
  });
});
