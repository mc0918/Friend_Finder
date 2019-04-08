//set up DB connection and requirements
var connection = require("../../config/connection");

module.exports = function(app) {
  var path = require("path");

  app.get("/api/survey", function(req, res) {
    console.log(res);
    res.send(req.body.scores);
    //     // res.format({
    //     //   "application/json": function() {
    //     //     //console.log(req.body.res);
    //     //     res.send(req.body.scores);
    //     //   }
    //     // });
  });

  app.post("/api/survey", function(req, res) {
    // res.format({
    //   "application/json": function() {
    //     console.log(req.body.res);
    //     //res.send(req.body.scores);
    //   }
    // });
    // res.json(req.body.scores);
    var scores = req.body.scores;
    var scoreParsed = JSON.parse(scores);
    console.log(scoreParsed.form1.response);
    console.log(scoreParsed);
    for (var key in scoreParsed) {
      //Only returns the string form1 not the object form1
      if (key == "form1") {
        // for (var formKey in key) {
        console.log(key.response);
        // }
      }
    }
    //res.send(req.body.scores);
  });

  //declare functions for finding match

  // function findMatch(userData, friends){
  //     const bestMatch = {
  //         name: '',
  //         photo: '',
  //         friendDifference: Infinity
  //     }

  // for(let i loop over friends){
  //     totalDifference = 0;
  //     currentFriend = friends[i];

  //     for (let j loop over currentFriend.scores){
  //         compare userData.scores[j] and currentFriend.scores[j];
  //         totalDifference += Math.abs(parseInt(userScore) - parseInt(friendScore))
  //     }

  //     if(totalDifference <= bestMatch.friendDifference){
  //         bestMatch = currentFriend
  //     }
  // }

  // return bestMatch;

  // }
};
//module.exports = {1 get route for all profiles and 1 post route to add new profile}
//when posting new user data also use data to find match
//respond with the matched profile
