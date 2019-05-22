var express = require("express");
//express configuration
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(__dirname + '/app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Determine the user's most compatible friend using the following as a guide:
//router
var path = require('path');
var bodyParser = require("body-parser");
// .......
// body parser to handle midway data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
