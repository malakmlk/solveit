module.exports = app => {
    const maladies = require("../controllers/maladie.controller.js");
    var router = require("express").Router();  
    router.post("/", maladies.create);
    router.get("/", maladies.findAll);
    router.put("/:id", maladies.findOne);
    app.use('/api/maladies', router);
};
