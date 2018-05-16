var db = require("../models");

module.exports = function(app) {

  app.get('/api/coffee', (req, res) => {
    db.Coffee.findAll({})
    .then(function(coffeeDb) {
      res.json(coffeeDb);
      console.log('Coffees: ' + coffeeDb)
    });
  });

  // POST route for saving a new post
 // app.post("/api/coffee", function(req, res) {
 //   console.log(req.body);
 //   db.Coffee.create({
 //     brand: "Test",
 //     bean_name: "Test Bean",
 //     roast: "Light",
 //     profile1: "floral",
 //     origin: "Test origin",
 //     decaf: 1
 //   })
 //     .then(function(coffeeDb) {
 //       res.json(coffeeDb);
 //     });
 // });


};
