var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var STUDENTS_COLLECTION = "students";
var LESSONS_COLLECTION = "lessons";

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

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// STUDENTS API ROUTES BELOW

/*  "/api/students"
 *    GET: finds all students
 *    POST: creates a new student
 */

app.get("/api/students", function(req, res) {
  db.collection(STUDENTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get students.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/students", function(req, res) {
  var newStudent = req.body;
  newStudent.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(STUDENTS_COLLECTION).insertOne(newStudent, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new student.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

/*  "/api/students/:id"
 *    GET: find student by id
 *    PUT: update student by id
 *    DELETE: deletes student by id
 */

app.get("/api/students/:id", function(req, res) {
  db.collection(STUDENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get student");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/students/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(STUDENTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set: updateDoc}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update student");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/students/:id", function(req, res) {
  var id;

  db.collection(STUDENTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete student");
    } else {
      res.status(200).json(req.params.id);

      id = new ObjectID(req.params.id);
      var date = new Date();
      var futureDate = date.getFullYear() + '-0' + (date.getMonth()+1) + '-' + date.getDate();
      console.log(id + " " + futureDate);
      /* db.collection(LESSONS_COLLECTION).deleteMany({student: {_id: {$eq: id}}, lessonDate: {$gt : futureDate}}); */

    }
  });
  db.collection(LESSONS_COLLECTION).deleteMany({lessonStart: "17:00"}, function(err, result)
  {
    console.log("NAEZ");
  });

});


// LESSONS API ROUTES BELOW

/*  "/api/lessons"
 *    GET: finds all lessons
 *    POST: creates a new lesson
 */

app.get("/api/lessons", function(req, res) {
  db.collection(LESSONS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get lessons.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/lessons", function(req, res) {
  var newLesson = req.body;
  newLesson.createDate = new Date();

  db.collection(LESSONS_COLLECTION).insertOne(newLesson, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new lesson.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/lessons/:id"
 *    GET: find lesson by id
 *    PUT: update lesson by id
 *    DELETE: deletes lesson by id
 */

app.get("/api/lessons/:id", function(req, res) {
  db.collection(LESSONS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get lesson");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/lessons/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(LESSONS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set: updateDoc}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update lesson");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/lessons/:id", function(req, res) {
  db.collection(LESSONS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete lesson");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});