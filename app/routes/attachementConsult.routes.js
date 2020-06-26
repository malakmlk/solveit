module.exports = app => {
    const attachementConsult = require("../controllers/attachementConsult.controller.js");
    var router = require("express").Router();
    router.post("/", attachementConsult.create);
    router.get("/", attachementConsult.findAll);
    router.get("/:idSignal", attachementConsult.findbySignal);
    app.use('/api/attachementConsult', router);
  };