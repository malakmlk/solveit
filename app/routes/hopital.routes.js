module.exports = app => {
    const hopitals = require("../controllers/hopital.controller.js");
  
    var router = require("express").Router();
  
    // Create a new hopital
    router.post("/", hopitals.create);
  
    // Retrieve all hopitals
    router.get("/", hopitals.findAll);
  
    // Retrieve all published hopitals
    
    // Retrieve a single hopital with id
    router.get("/:id", hopitals.findOne);
  
    // Update a hopital with id
    router.put("/:id", hopitals.update);
  
    // Delete a hopital with id
    router.delete("/:id", hopitals.delete);
  
    // Create a new hopital
    router.delete("/", hopitals.deleteAll);
  
    app.use('/api/hopitals', router);
  };