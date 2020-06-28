const db = require("../models");
const HistoriqueMédical = db.historiqueMédicals;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    
    const historiqueMédical = {
      idPatient: req.body.idPatient,
      idMaladie: req.body.idMaladie
    };
  
    
    HistoriqueMédical.create(historiqueMédical)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the HistoriqueMédical."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    HistoriqueMédical.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HistoriqueMédicals."
        });
      });
  };
  exports.findByIdPatient = (req, res) => {
    const idPatient = req.params.idPatient;
    var condition = idPatient ? { idPatient: { [Op.like]: `${idPatient}` } } : null;
  
    HistoriqueMédical.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving SymptConsult with id=" + idPatient
        });
      });
  };

  

  
 
  