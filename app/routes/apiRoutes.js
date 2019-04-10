//set up DB connection and requirements
var connection = require("../../config/connection");

module.exports = function(app) {
  var path = require("path");

  app.get("/api/users", function(req, res) {
    query = "select * from profiles";
    connection.query(query, function(err, result) {
      res.json(result);
    });
  });

  app.post("/api/survey", function(req, res) {
    var newUser = [];
    var finalUserData = [];

    var scores = req.body.scores;
    console.log(scores);

    var scoreParsed = JSON.parse(scores);

    finalUserData.push(scoreParsed.name);
    finalUserData.push(scoreParsed.image);
    finalUserData.push(scoreParsed.description);

    for (var key in scoreParsed) {
      for (i = 0; i <= 10; i++) {
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

    //insertUser(finalUserData);

    //Right now if two potential matches have the same friendDifference will only return the first one
    findMatch(finalUserData, function(data) {
      console.log("LOOK HERE", data);
      res.json(data);
    });

    console.log(finalUserData);
  });

  //===========================FUNCTIONS=====================
  function insertUser(array) {
    query =
      "INSERT INTO profiles (name, image, description, scores) VALUES (?,?,?,?);";
    connection.query(query, [array[0], array[1], array[2], array[3]], function(
      err,
      res
    ) {
      if (err) throw err;
      console.log("added to database");
    });
  }
  //declare functions for finding match
  function findMatch(userData, cb) {
    console.log("AAAA", userData);
    const bestMatch = {
      name: "",
      photo: "",
      description: "",
      friendDifference: Infinity
    };
    var query =
      "SELECT * FROM profiles WHERE id < (SELECT MAX(id) FROM profiles);";
    connection.query(query, function(err, result) {
      if (err) throw err;

      for (i = 0; i < result.length; i++) {
        var friendScoreArray = [];
        var friendScoreTotal = [];
        var userScoreTotal = [];
        var currentFriend = result[i].name;

        var friendFinal = sumFriendScores(
          friendScoreArray,
          friendScoreTotal,
          result
        );
        var userFinal = sumUserScores(userData, userScoreTotal);

        if (Math.abs(userFinal - friendFinal) < bestMatch.friendDifference) {
          bestMatch.friendDifference = Math.abs(userFinal - friendFinal);
          console.log(
            `current friend: ${currentFriend}, ${bestMatch.friendDifference}`
          );
          bestMatch.name = currentFriend;
          bestMatch.photo = result[i].image;
          bestMatch.description = result[i].description;
        }
        // console.log(
        //   "Friend " +
        //     [i] +
        //     " Score Total: " +
        //     friendFinal +
        //     "\n" +
        //     "User total: " +
        //     userFinal
        // );
      }
      console.log(bestMatch);
      return cb(bestMatch);
    });
  }

  var sumFriendScores = function(friendData, friendScoreTotal, result) {
    friendData.push(result[i].scores);
    var friendNum = friendData[0].split(",");
    for (j = 0; j < friendNum.length; j++) {
      friendScoreTotal.push(parseInt(friendNum[j]));
      var friendTotal = friendScoreTotal.reduce(function(a, b) {
        return a + b;
      });
    }
    return friendTotal;
  };

  var sumUserScores = function(userData, userArray) {
    console.log("BBBBB", userData);
    var userNum = userData[3].split(",");
    for (k = 0; k < userNum.length; k++) {
      userArray.push(parseInt(userNum[k]));
      var userTotal = userArray.reduce((a, b) => {
        return a + b;
      });
    }
    return userTotal;
  };
};
