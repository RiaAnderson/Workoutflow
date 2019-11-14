// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var muscle_building = {
  all: function(cb) {
    orm.all("muscle_building", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.create("muscle_building", cols, vals, function(res) {
      cb(res);
    });
  }
  // // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create("muscle_building", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update("muscle_building", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete("muscle_building", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

var cardio = {
  all: function(cb) {
    orm.all("cardio", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.create("cardio", cols, vals, function(res) {
      cb(res);
    });
  }
} 

var strength_training = {
  all: function(cb) {
    orm.all("strength_training", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.create("strength_training", cols, vals, function(res) {
      cb(res);
    });
  }
};

module.exports = {
  muscle_building,
  cardio,
  strength_training
}

