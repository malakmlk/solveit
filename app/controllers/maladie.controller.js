const db = require("../models");
const Maladie = db.maladies;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    const maladie = {
        id:req.body.id,
        libellé:req.body.libellé
    };
  
    Maladie.create(maladie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Maladie."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
    Maladie.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Maladies."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Medecin.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving maladie with id=" + id
        });
      });
  };