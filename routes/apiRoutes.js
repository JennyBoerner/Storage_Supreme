var db = require("../models");

module.exports = function(app) {
  // Grab all reminders
  app.get("/api/add", function(req, res) {
    db..findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
    });
  });

  // Creates new 
  app.post("/routes/", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
