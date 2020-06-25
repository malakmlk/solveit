module.exports = app => {
    const medecins = require("../controllers/medecin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new medecin
    router.post("/", medecins.create);
  
    // Retrieve all medecins
    router.get("/", medecins.findAll);
  
    // Retrieve all published medecins
   
  
    // Retrieve a single medecin with id
    router.get("/:id", medecins.findOne);
  
    // Update a medecin with id
    router.put("/:id", medecins.update);
  
    // Delete a medecin with id
    router.delete("/:id", medecins.delete);
  
    // Create a new medecin
    router.delete("/", medecins.deleteAll);
  
    app.use('/api/medecins', router);
  };