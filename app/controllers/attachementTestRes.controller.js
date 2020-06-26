const db = require("../models");
const AttachementTestRes = db.attachementTestRess;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {

  
    // Create a Tutorial
    const attachementTestRes = {
        idSignal:req.body.idSignal,
        idResTes:req.body.idResTes
    };
  
    // Save Tutorial in the database
    AttachementTestRes.create(attachementTestRes)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the AttachementTestRes."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    AttachementTestRes.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving AttachementTestRess."
        });
      });
  };
  exports.findbySignal = (req, res) => {
    const idSignal = req.params.idSignal;
    var condition = idSignal ? { idSignal: { [Op.like]: `${idSignal}` } } : null;
    AttachementSympt.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving AttachementTestRes with id=" + idSignal
        });
      });
  };