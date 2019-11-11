var express = require("express");

var router = express.Router();

// Import the model (workoutflow.js) to use its database functions.
// var muscle_building = require("../models/workoutflow.js");
// var cardio = require("../models/workoutflow.js");
// var strength_training = require("../models/workoutflow.js");
 var workouts = require("../models/workoutflow.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("home");
  });

router.get("/muscle_building", function(req, res) {
  workouts.muscle_building.all(function(data) {
  res.render("muscle_building", {mscl:data});
  });
});

router.get("/cardio", function(req, res) {
  workouts.cardio.all(function(data) {
  res.render("cardio", {crd:data});
  });
});

router.get("/strength_training", function(req, res) {
  workouts.strengthTraining.all(function(data) {
  res.render("strength_training", {str:data});
  });
});

router.post("/muscle_buildingCreate", function(req, res) {
  workouts.muscle_building.create([
    "ex_name", "body_part", "intervals", "day"
  ], [
    req.body.ex_name, req.body.body_part, req.body.intervals, req.body.day
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/muscle_building");
  });
});


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
