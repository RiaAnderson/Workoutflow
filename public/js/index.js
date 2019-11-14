// Creating if_eq function for handlebars so that we can pass in parameters to select certain items from MySQL
Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
      return opts.fn(this);
  }
});
