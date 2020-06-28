const db = require("../models");
const Willaya = db.willayas;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    const willaya = {
        codeWillaya:req.body.codeWillaya,
        nom:req.body.nom
    };
  
    Willaya.create(willaya)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Willaya."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
    Willaya.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Willayas."
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
          message: "Error retrieving Willaya with id=" + id
        });
      });
  };