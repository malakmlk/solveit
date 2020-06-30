const db = require("../models");
const Patient = db.patients;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    // Validate request
    if (!req.body.nss) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const patient = {
      nom: req.body.nom,
      prenom: req.body.prenom,
      nss:req.body.nss,
      typeAssurence:req.body.typeAssurance,
      numTel: req.body.numTel,
      sexe:req.body.sexe,
      autreContactTel:req.body.autreContactTel,
      autreContactEmail:req.body.autreContactEmail,
      adresse:req.body.adresse,
      email: req.body.email,
      dateNaissance: req.body.dateNaissance,
      groupage:req.body.groupage,
      etatCivile:req.body.etatCivile
     
    };
  
    Patient.create(patient)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the patient."
        });
      });
  };
  exports.findAll = (req, res) => {
    const nss = req.query.nss;
    var condition = nss ? { nss: { [Op.like]: `%${nss}%` } } : null;
  
    Patient.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving patients."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Patient.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Patient.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "patient was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update patient with id=${id}. Maybe patient was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating patient with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Patient.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "patient was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete patient with id=${id}. Maybe patient was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete patient with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Patient.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} patients were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all patients."
        });
      });
  };

  exports.findAllPublished = (req, res) => {
    
  };