const db = require("../models");
const AttachementSympt = db.attachementSympts;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    const attachementSympt = {
        idSymptome:req.body.idSymptome,
        idSignal:req.body.idSignal
    };
    AttachementSympt.create(attachementSympt)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the SymptConsult."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    AttachementSympt.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving symptConsults."
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
          message: "Error retrieving AttachementSympt with id=" + idSignal
        });
      });
  };