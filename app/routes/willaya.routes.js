module.exports = app => {
    const willayas = require("../controllers/willaya.controller.js");
    var router = require("express").Router();  
    router.post("/", willayas.create);
    router.get("/", willayas.findAll);
    router.put("/:id", willayas.findOne);
    app.use('/api/willayas', router);
};
