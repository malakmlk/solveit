const db = require("../models");
const Symptome = db.symptomes;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    // Create a symptome
    console.log(req.body.description);
    
    const symptome = {
      description: req.body.description
    };
  
    // Save symptome in the database
    Symptome.create(symptome)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Symptome."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    Symptome.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving symptomes."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Symptome.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Symptome with id=" + id
        });
      });
  };