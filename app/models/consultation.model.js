module.exports = (sequelize, Sequelize) => {
    const Consultation = sequelize.define("consultation", {
      observation: {
        type: Sequelize.STRING
      },  
      idMedecin: {
        type: Sequelize.INTEGER,
        
        references: {
          model: "medecins",
          key: "id",
          as: "idMedecin",
        },
      }, 
      idPatient: {
        type: Sequelize.INTEGER,
        
        references: {
          model: "patients",
          key: "nss",
          as: "idPatient",
        },
      }, 
    
      ordannance: {
        type: Sequelize.STRING
      },
     
    });
  
    return Consultation;
  };