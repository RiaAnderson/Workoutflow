var express = require("express");

var router = express.Router();

var workouts = require("../models/workoutflow.js");

// Create all our routes and set up logic within those routes where required.
// Router.get methods to retrieve the info from the database and displaying it to handlebars
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
// router.post methods to insert new exercises to the page 
router.post("/muscle_buildingCreate", function(req, res) {
  workouts.muscle_building.create([
    "ex_name", "body_part", "intervals", "day"
  ], [
    req.body.ex_name, req.body.body_part, req.body.intervals, req.body.day
  ], function(result) {
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
    "ex_name", "intervals", "day"
  ], [
    req.body.ex_name, req.body.intervals, req.body.day
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/cardio");
  });
});
// Router.put methods to change status of exercise from completed=false to completed=true
router.put("/muscle_buildingUpdate", function(req, res) {
  workouts.muscle_building.update(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/muscle_building");
  });
});

router.put("/strength_trainingUpdate", function(req, res) {
  workouts.strength_training.update(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/strength_training");
  });
});

router.put("/cardioUpdate", function(req, res) {
  workouts.cardio.update(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/cardio");
  });
});
// Router.put method to chanage exercise from completed=true to false
router.put("/muscle_buildingReset", function(req, res) {
  workouts.muscle_building.reset(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/muscle_building");
  });
});
router.put("/strength_trainingReset", function(req, res) {
  workouts.strength_training.reset(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/strength_training");
  });
});
router.put("/cardioReset", function(req, res) {
  workouts.cardio.reset(req.body.mb_id, function(result){
    console.log(result);
    res.redirect("/cardio");
  });
});


// Export routes for server.js to use.
module.exports = router;
