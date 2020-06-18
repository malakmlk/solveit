module.exports = app => {
    const medecins = require("../controllers/medecin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", medecins.create);
  
    // Retrieve all Tutorials
    router.get("/", medecins.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", medecins.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", medecins.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", medecins.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", medecins.delete);
  
    // Create a new Tutorial
    router.delete("/", medecins.deleteAll);
  
    app.use('/api/medecins', router);
  };