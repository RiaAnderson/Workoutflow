var express = require("express");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Override with Post having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
  helpers: {
    if_eq: function(a, b, opts) {
      if (a == b) {
          return opts.fn(this);
      }
    }
  },
  defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/workoutflow_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
