var express = require("express");

var router = express.Router();

// Import the model (workoutflow.js) to use its database functions.
var workoutflow = require("../models/workoutflow.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  workoutflow.all(function(data) {
    var hbsObject = {
      mscl: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

router.get("/muscle_building", function(req, res) {
  workoutflow.all(function(data) {
    var hbsObject = {
      mscl: data
    };
    console.log(hbsObject);
    res.render("muscle_building", hbsObject);
  });
});

router.get("/", function(req, res) {
  workoutflow.all(function(data) {
    var hbsObject = {
      mscl: data
    };
    console.log(hbsObject);
    res.render("cardio", hbsObject);
  });
});

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
