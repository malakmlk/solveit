const db = require("../models");
const SymptConsult = db.symptConsults;
const Op = db.Sequelize.Op;

  exports.create = (req, res) => {
    // Validate request
    
  
    // Create a symp
    const symptConsult = {
        idSymptome:req.body.idSymptome,
        idConsultation:req.body.idConsultation
    };
  
    // Save symp in the database
    SymptConsult.create(symptConsult)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the SymptConsult."
        });
      });
  };
  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    SymptConsult.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving symptConsults."
        });
      });
  };

  exports.findbyConsult = (req, res) => {
    const idConsultation = req.params.idConsultation;
    var condition = idConsultation ? { idConsultation: { [Op.like]: `${idConsultation}` } } : null;
  
    SymptConsult.findAll({where: condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving SymptConsult with id=" + idConsultation
        });
      });
  };