module.exports = app => {
    const consultations = require("../controllers/consultation.controller.js");
    const uploadOrdannance = require('../config/uploadOrdannance.config.js');
    var router = require("express").Router();
  
   
    router.post("/",uploadOrdannance.single("uploadfile"), consultations.create);
  
   
    router.get("/", consultations.findAll);
  
    router.get("/:idPatient", consultations.findByIdPatient);
   
    router.put("/:id", consultations.update);
  
   
    router.delete("/:id", consultations.delete);
  
    
   
  
    app.use('/api/consultations', router);
  };