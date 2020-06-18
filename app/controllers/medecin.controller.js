const db = require("../models");
const Medecin = db.medecins;
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
    const medecin = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      speciality: req.body.speciality,
      contact: req.body.contact
    };
  
    // Save= in the database
    Medecin.create(medecin)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the doctor."
        });
      });
  };
  exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Medecin.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving doctors."
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
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Medecin.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "doctor was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Doctor with id=${id}. Maybe Doctor was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Doctor with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Medecin.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "DOCTOR was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Doctor with id=${id}. Maybe Doctor was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete doctor with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Medecin.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    Medecin.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };