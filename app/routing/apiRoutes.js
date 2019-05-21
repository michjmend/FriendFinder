// Your apiRoutes.js file should contain two routes:
var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
	app.post('/api/friends', function(req, res) {
		// set variables to make code more readable
		var userInput = req.body;
		var userResponses = userInput.scores;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 100000;

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			console.log(diff)
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
