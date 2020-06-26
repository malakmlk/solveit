const db = require("../models");
const Signal = db.signals;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {

    const signal = {
      description: req.body.observation,
      idMedecin: req.body.idMedecin,
      idPatient: req.body.idPatient,
    };

    // Save Tutorial in the database
    Signal.create(signal)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Signal."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
    Signal.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Signals."
        });
      });
  };
  exports.findByIdPatient = (req, res) => {
    const idPatient = req.params.idPatient;
    var condition = idPatient ? { idPatient: { [Op.like]: `${idPatient}` } } : null;
  
    Signal.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Signal with id=" + idPatient
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
    Signal.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Signal with id=" + id
        });
      });
  };
  exports.update = (req, res) => {
    const id = req.params.id;
    Signal.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Signal was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Signal with id=${id}. Maybe Signal was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Signal with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Signal.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Signal was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Signal with id=${id}. Maybe Signal was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Signal with id=" + id
        });
      });
  };
  