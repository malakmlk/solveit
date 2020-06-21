module.exports = app => {
    const hopitals = require("../controllers/hopital.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", hopitals.create);
  
    // Retrieve all Tutorials
    router.get("/", hopitals.findAll);
  
    // Retrieve all published Tutorials
    
    // Retrieve a single Tutorial with id
    router.get("/:id", hopitals.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", hopitals.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", hopitals.delete);
  
    // Create a new Tutorial
    router.delete("/", hopitals.deleteAll);
  
    app.use('/api/hopitals', router);
  };