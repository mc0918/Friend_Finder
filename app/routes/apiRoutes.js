//set up DB connection and requirements

//declare functions for finding match

function findMatch(userData, friends){
    const bestMatch = {
        name: '',
        photo: '',
        friendDifference: Infinity
    }


for(let i loop over friends){
    totalDifference = 0;
    currentFriend = friends[i];

    for (let j loop over currentFriend.scores){
        compare userData.scores[j] and currentFriend.scores[j];
        totalDifference += Math.abs(parseInt(userScore) - parseInt(friendScore))
    }

    if(totalDifference <= bestMatch.friendDifference){
        bestMatch = currentFriend
    }
}

return bestMatch;

}

module.exports = {1 get route for all profiles and 1 post route to add new profile}
//when posting new user data also use data to find match
//respond with the matched profile