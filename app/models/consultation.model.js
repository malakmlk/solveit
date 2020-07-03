module.exports = (sequelize, Sequelize) => {
    const Consultation = sequelize.define("consultation", {
      observation: {
        type: Sequelize.STRING
      },  
      diagnostic: {
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
      tension: {
        type: Sequelize.STRING
      },
      poid: {
        type: Sequelize.STRING
      },
      taille:{
        type: Sequelize.STRING
      },
      ordannance: {
        type: Sequelize.BLOB('long')
      }
     
    });
  
    return Consultation;
  };