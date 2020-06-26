module.exports = app => {
    const attachementSympt = require("../controllers/attachementSympt.controller.js");
    var router = require("express").Router();
    router.post("/", attachementSympt.create);
    router.get("/", attachementSympt.findAll);
    router.get("/:idSignal", attachementSympt.findbySignal);
    app.use('/api/attachementSympt', router);
  };