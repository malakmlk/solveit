module.exports = app => {
    const attachementTestRes = require("../controllers/attachementTestRes.controller.js");
    var router = require("express").Router();
    router.post("/", attachementTestRes.create);
    router.get("/", attachementTestRes.findAll);
    router.get("/:idSignal", attachementTestRes.findbySignal);
    app.use('/api/attachementTestRes', router);
  };