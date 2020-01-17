var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var STUDENTS_COLLECTION = "students";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://drumkiller:QayWsxEdc123@ds149706.mlab.com:49706/heroku_bml37ltr", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/dist/student-scheduler-client'));

  app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/dist/student-scheduler-client/index.html'));
  });

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CONTACTS API ROUTES BELOW
