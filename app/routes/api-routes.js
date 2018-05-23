var db = require("../models");

module.exports = function(app) {

  app.get('/api/coffee', (req, res) => {
    db.Coffee.findAll({})
    .then(function(coffeeDb) {
      res.json(coffeeDb);
    });
  });

  app.get('/api/users', (req, res) => {
    db.user.findAll({})
    .then(function(data) {
      res.json(data);
      console.log(data)
    });
  });

};
