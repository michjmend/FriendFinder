var express = require("express");
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

// console.log(__dirname);
app.use(express.static(__dirname + '/app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var bodyParser = require("body-parser");
// body parser to handle midway data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname + '/app/routing/apiRoutes'))(app);
require(path.join(__dirname + '/app/routing/htmlRoutes'))(app);
//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
