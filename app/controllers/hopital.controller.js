const db = require("../models");
const Hopital = db.hopitals;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a 
    const hopital = {
      nom: req.body.nom,   
      numTel: req.body.numTel,
      idWillaya:req.body.idWillaya,
      adresse:req.body.adresse,
      email: req.body.email,
      dateCreation: req.body.dateCreation
     
    };
  
    // Save= in the database
    Hopital.create(hopital)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the hospital."
        });
      });
  };
  exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Hopital.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hopitals."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Hopital.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Hopital.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "hopital was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update hopital with id=${id}. Maybe hopital was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating hopital with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Hopital.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "hopital was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete hopital with id=${id}. Maybe hopital was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete hopital with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Hopital.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} hopitals were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all hopitals."
        });
      });
  };

 