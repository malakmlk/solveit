const db = require("../models");
const Consultation = db.consultations;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    
    const consultation = {
      observation: req.body.observation,
      idMedecin: req.body.idMedecin,
      idPatient: req.body.idPatient,
      ordannance: req.body.ordannance   
     
    };
  
    
    Consultation.create(consultation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Consultation."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    Consultation.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving consultations."
        });
      });
  };
  exports.findByIdPatient = (req, res) => {
    const idPatient = req.params.idPatient;
    var condition = idPatient ? { idPatient: { [Op.like]: `${idPatient}` } } : null;
  
    Consultation.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving SymptConsult with id=" + idPatient
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Consultation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Consultation with id=" + id
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    Consultation.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Consultation was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Consultation with id=${id}. Maybe Consultation was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Consultation with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Consultation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Consultation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Consultation with id=${id}. Maybe Consultation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Consultation with id=" + id
        });
      });
  };
  