const { patients } = require("../models/index.js");

module.exports = app => {
    const patients = require("../controllers/patient.controller.js");
  
    var router = require("express").Router();
  
    // Create a new patient
    router.post("/", patients.create);
  
    // Retrieve all patients
    router.get("/", patients.findAll);
  
    // Retrieve all published patients
   
  
    // Retrieve a single patient with id
    router.get("/:id", patients.findOne);
  
    // Update a patient with id
    router.put("/:id", patients.update);
  
    // Delete a patient with id
    router.delete("/:id", patients.delete);
  
    // Create a new patient
    router.delete("/", patients.deleteAll);
  
    app.use('/api/patients', router);
  };