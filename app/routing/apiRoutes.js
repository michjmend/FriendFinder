// Your apiRoutes.js file should contain two routes:
var friends = require('../data/friends.js');

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	app.post('/api/friends', function(req, res) {
		// set variables to make code more readable
		var user = req.body;
		var userResponses = user.scores;
		console.log(userResponses);
		//the match closest to your score will be the lunch buddy with the closest minimun score difference
		var lunchBuddy = 0;
		var minScoreDiff = 40;

		// parseInt for scores
		for(var i = 0; i < userResponses.length; i++) {
			userResponses[i] = parseInt(userResponses[i]);
		}


		for (var i = 0; i < friends.length; i++) {
			var totalDifference = 0;
			for (var j = 0; j < friends[i].scores.length; j++) {
				var diff = Math.abs(friends[i].scores[j] - userResponses[j]);
				totalDifference += diff;
			}
			console.log(diff)
			if (totalDifference < minScoreDiff) {
				lunchBuddy = i;
				friendMatch = friends[i].name
				friendMatchImage = friends[i].photo
				minScoreDiff = totalDifference;
			}
		}
		friends.push(user);
		res.json(friends[lunchBuddy]);
	});
};
