module.exports = app => {
    const symptomes = require("../controllers/symptome.controller.js");
  
    var router = require("express").Router();
  
    // Create a new symptome
    router.post("/", symptomes.create);
  
    // Retrieve all symptomes
    router.get("/", symptomes.findAll);
  
    // Retrieve all published symptomes
   
  
    // Retrieve a single symptome with id
    router.get("/:id", symptomes.findOne);
  
   
  
    app.use('/api/symptomes', router);
  };