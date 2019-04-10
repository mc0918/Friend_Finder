//var connection = require("../../config/connection");
$(document).ready(function() {
  console.log("redy");

  questionArr = [
    "Are you adventurous?",
    "Do you enjoy spicy foods?",
    "Would you be excited if the government contacted you about a secret mission only you can do?",
    "If you were locked in a museum overnight, how scared would you be?",
    "If a bag full of $100 bills dropped in your lap, would you be suspicious?",
    "Are you enthusiastic about parrot-ownership?",
    "Would you be interested in seeing my vintage 1967 Corvette Stingray?",
    "You are up in the mountains, how scared are you of the edge of the cliff?",
    "You wake up to a strange man at the foot of your bed screaming at you about missing the shareholder meeting, are you surprised?",
    "When the working class rises up to reclaim the fruits of their labor, are you likely to join them?"
  ];

  for (i = 0; i < questionArr.length; i++) {
    var form = $("<form>").attr("class", "range-field text-center");
    var div = $("<div>").attr("class", "form-group");
    var label = $("<label>")
      .attr("for", "calculatorSlider" + [i])
      .html("0 = Not at all! | 5 = Extremely!");
    var input = $("<input>")
      .attr("id", "calculatorSlider" + [i])
      .attr("class", "form-control-range slider")
      .attr("type", "range")
      .attr("value", "0")
      .attr("min", "0")
      .attr("max", "5");

    div.append(label, input);
    form.append(div);

    var row = $("<div>").attr("class", "row");
    var column = $("<div>").attr("class", "col-md-6 text-center");
    var h3 = $("<h3>");
    var span = $("<span>").html("Your Answer");
    var h2 = $("<h2>");
    var strong = $("<strong>")
      .attr("class", "userAnswer" + [i])
      .html("0");

    h2.append(strong);
    h3.append(span);
    column.append(h3, h2);
    row.append(column);

    var parentDiv = $("<div>").attr("class", "card");
    var childDiv = $("<div>").attr("class", "card-body");
    var question = $("<h3>")
      .attr("class", `question${[i]} text-center`)
      // .attr("class", "text-center")
      .html("<strong>" + questionArr[i] + "</strong>");
    var hr = $("<hr />");

    question.append(hr);
    childDiv.append(question, form, row);
    parentDiv.append(childDiv);

    $("#questions").append(parentDiv);
  }
  // var slider = $("#calculatorSlider0");
  // var answer = $(".userAnswer");
  //what if I add a square bracket after the "{" to make "survey" an object where everything is an array
  var survey = {
    name: "",
    image: "",
    description: "",
    form1: {
      active: true,
      response: 0
    },
    form2: {
      active: true,
      response: 0
    },
    form3: {
      active: true,
      response: 0
    },
    form4: {
      active: true,
      response: 0
    },
    form5: {
      active: true,
      response: 0
    },
    form6: {
      active: true,
      response: 0
    },
    form7: {
      active: true,
      response: 0
    },
    form8: {
      active: true,
      response: 0
    },
    form9: {
      active: true,
      response: 0
    },
    form10: {
      active: true,
      response: 0
    }
  };

  function calculate(answer, response, value) {
    answer.text(Math.round(value));
  }
  var slider1 = $("#calculatorSlider0");
  var answer1 = $(".userAnswer0");

  slider1.on("input change", function(e) {
    if (survey.form1.active) {
      calculate(answer1, survey.form1.response, $(this).val());
      survey.form1.response = $(this).val();
      console.log("slider1: ", survey.form1.response);
    }
  });

  var slider2 = $("#calculatorSlider1");
  var answer2 = $(".userAnswer1");

  slider2.on("input change", function(e) {
    if (survey.form2.active) {
      calculate(answer2, survey.form2.response, $(this).val());
      survey.form2.response = $(this).val();
      console.log("slider2: ", survey.form2.response);
    }
  });

  var slider3 = $("#calculatorSlider2");
  var answer3 = $(".userAnswer2");

  slider3.on("input change", function(e) {
    if (survey.form3.active) {
      calculate(answer3, survey.form3.response, $(this).val());
      survey.form3.response = $(this).val();
      console.log("slider3: ", survey.form3.response);
    }
  });

  var slider4 = $("#calculatorSlider3");
  var answer4 = $(".userAnswer3");

  slider4.on("input change", function(e) {
    if (survey.form4.active) {
      calculate(answer4, survey.form4.response, $(this).val());
      survey.form4.response = $(this).val();
      console.log("slider4: ", survey.form4.response);
    }
  });

  var slider5 = $("#calculatorSlider4");
  var answer5 = $(".userAnswer4");

  slider5.on("input change", function(e) {
    if (survey.form5.active) {
      calculate(answer5, survey.form5.response, $(this).val());
      survey.form5.response = $(this).val();
      console.log("slider5: ", survey.form5.response);
    }
  });

  var slider6 = $("#calculatorSlider5");
  var answer6 = $(".userAnswer5");

  slider6.on("input change", function(e) {
    if (survey.form6.active) {
      calculate(answer6, survey.form6.response, $(this).val());
      survey.form6.response = $(this).val();
      console.log("slider6: ", survey.form6.response);
    }
  });

  var slider7 = $("#calculatorSlider6");
  var answer7 = $(".userAnswer6");

  slider7.on("input change", function(e) {
    if (survey.form7.active) {
      calculate(answer7, survey.form7.response, $(this).val());
      survey.form7.response = $(this).val();
      console.log("slider7: ", survey.form7.response);
    }
  });

  var slider8 = $("#calculatorSlider7");
  var answer8 = $(".userAnswer7");

  slider8.on("input change", function(e) {
    if (survey.form8.active) {
      calculate(answer8, survey.form8.response, $(this).val());
      survey.form8.response = $(this).val();
      console.log("slider8: ", survey.form8.response);
    }
  });

  var slider9 = $("#calculatorSlider8");
  var answer9 = $(".userAnswer8");

  slider9.on("input change", function(e) {
    if (survey.form9.active) {
      calculate(answer9, survey.form9.response, $(this).val());
      survey.form9.response = $(this).val();
      console.log("slider9: ", survey.form9.response);
    }
  });

  var slider10 = $("#calculatorSlider9");
  var answer10 = $(".userAnswer9");

  slider10.on("input change", function(e) {
    if (survey.form10.active) {
      calculate(answer10, survey.form10.response, $(this).val());
      survey.form10.response = $(this).val();
      console.log("slider10: ", survey.form10.response);
    }
  });

  //console.log(survey);
  function sendScores() {
    $("#submit").on("click", function(e) {
      e.preventDefault();
      console.log("CLICK!");

      survey.name = $("#user-name")
        .val()
        .trim();
      survey.image = $("#user-image")
        .val()
        .trim();
      survey.description = $("#user-description")
        .val()
        .trim();

      //AJAX
      var data = JSON.stringify(survey);
      console.log("PUBLIC DATA: ", data);
      $.ajax({
        type: "POST",
        url: "/api/survey",
        dataType: "json",
        data: { scores: data },
        success: function(data) {
          console.log("success! SENT DATA:", data);
          // return data;
          //===============================================
          $.get("/api/survey", function(data) {
            console.log("HELLO?", data);
          });
          //===============================================
        },
        error: function() {
          console.log("Error!");
        }
      });
    });
  }
  sendScores();
});
