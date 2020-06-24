module.exports = app => {
    const symptConsults = require("../controllers/symptConsult.controller.js");
  
    var router = require("express").Router();
  
    // Create a new symptConsult
    router.post("/", symptConsults.create);
  
    // Retrieve all symptConsults
    router.get("/", symptConsults.findAll);
  
    // Retrieve all published symptConsults
   
  
    // Retrieve a single symptConsult with id
    router.get("/:id", symptConsults.findOne);
  
   
  
    app.use('/api/symptConsults', router);
  };