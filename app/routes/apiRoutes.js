//set up DB connection and requirements
var connection = require("../../config/connection");

module.exports = function(app) {
  var path = require("path");

  app.get("/api/survey", function(req, res) {
    console.log(res);
    res.send(req.body.scores);
  });

  app.post("/api/survey", function(req, res) {
    var newUser = [];
    var finalUserData = [];

    finalUserData.push(req.body.scores.name);
    finalUserData.push(req.body.scores.image);
    finalUserData.push(req.body.scores.description);

    var scores = req.body.scores;
    var scoreParsed = JSON.parse(scores);

    for (var key in scoreParsed) {
      for (i = 0; i < 10; i++) {
        if (key == "form" + [i]) {
          for (var formKey in scoreParsed[key]) {
            if (formKey === "response") {
              newUser.push(scoreParsed[key][formKey]);
              var userScores = newUser.join();
            }
          }
        }
      }
    }
    console.log(userScores);
    finalUserData.push(userScores);
    console.log(finalUserData);
    //res.json(scoreParsed);
  });

  function sendScores(array) {
    query = "UPDATE profiles SET "; //need name, image, description, column etc
  }
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
