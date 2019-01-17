var db = require("../angelsdb");

var express = require('express');

module.exports = function(app) {
<<<<<<< HEAD
  // Grab all reminders
  app.get("/api/add", function(req, res) {
    db..findAll({}).then(function(dbReminder) {
      res.json(dbReminder);
=======
  // Grab all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
>>>>>>> master
    });
  });

  // Creates new 
  app.post("/routes/", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // DESTROY 
  app.delete("/api/example/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

