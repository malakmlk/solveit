module.exports = app => {
    const historiqueMédical = require("../controllers/historiqueMedical.controller.js");
  
    var router = require("express").Router();
  
   
    router.post("/", historiqueMédical.create);
  
   
    router.get("/", historiqueMédical.findAll);
  
    router.get("/:idPatient", historiqueMédical.findByIdPatient);
   
    
    
   
  
    app.use('/api/historiqueMedicals', router);
  };