var express = require("express");

var router = express.Router();

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
  workouts.strength_training.all(function(data) {
  res.render("strength_training", {str:data});
  });
});

router.post("/muscle_buildingCreate", function(req, res) {
  workouts.muscle_building.create([
    "ex_name", "body_part", "intervals", "day"
  ], [
    req.body.ex_name, req.body.body_part, req.body.intervals, req.body.day
  ], function(result) {
    res.redirect("/muscle_building");
  });
});

router.put("/muscle_buildingUpdate", function(req, res) {
  workouts.muscle_building.update(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/muscle_building");
  });
});
router.post("/strength_trainingCreate", function(req, res) {
  workouts.strength_training.create([
    "ex_name", "body_part", "intervals", "day"
  ], [
    req.body.ex_name, req.body.body_part, req.body.intervals, req.body.day
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/strength_training");
  });
});

router.post("/cardioCreate", function(req, res) {
  workouts.cardio.create([
    "ex_name", "body_part", "intervals", "day"
  ], [
    req.body.ex_name, req.body.body_part, req.body.intervals, req.body.day
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/cardio");
  });
});

// Export routes for server.js to use.
module.exports = router;
