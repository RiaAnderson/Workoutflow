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
  },
  update: function(id, cb) {
    orm.update("muscle_building", id, cb, function(res) {
      cb(res);
    });
  },
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

