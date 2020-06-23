module.exports = app => {
    const consultations = require("../controllers/consultation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", consultations.create);
  
    // Retrieve all Tutorials
    router.get("/", consultations.findAll);
  
    // Retrieve all published Tutorials
    
    // Retrieve a single Tutorial with id
    router.get("/:id", consultations.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", consultations.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", consultations.delete);
  
    // Create a new Tutorial
   
  
    app.use('/api/consultations', router);
  };