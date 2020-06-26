const db = require("../models");
const AttachementConsult = db.attachementConsults;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    const AttachementConsult = {
        idConsultation:req.body.idConsultation,
        idSignal:req.body.idSignal
    };
  
    AttachementConsult.create(AttachementConsult)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the AttachementConsult."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
    AttachementConsult.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving AttachementConsults."
        });
      });
  };
  exports.findbySignal = (req, res) => {
    const idSignal = req.params.idSignal;
    var condition = idSignal ? { idSignal: { [Op.like]: `${idSignal}` } } : null;
    AttachementConsult.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving AttachementConsult with id=" + idSignal
        });
      });
  };