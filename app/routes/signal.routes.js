module.exports = app => {
    const signals = require("../controllers/signal.controller.js");
    var router = require("express").Router();  
    router.post("/", signals.create);
    router.get("/", signals.findAll);
    router.get("/:idPatient", signals.findByIdPatient);
    router.put("/:id", signals.update);
    router.delete("/:id", signals.delete);
    app.use('/api/signals', router);
};
