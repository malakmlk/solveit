module.exports = (sequelize, Sequelize) => {
    const Signal = sequelize.define("signal", {
      description: {
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
    });
    return Signal;
  };