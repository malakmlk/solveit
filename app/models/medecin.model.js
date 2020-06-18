module.exports = (sequelize, Sequelize) => {
    const Medecin = sequelize.define("medecin", {
      nom: {
        type: Sequelize.STRING
      },   
      prenom: {
        type: Sequelize.STRING
      },
      speciality: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      }
      
    });
  
    return Medecin;
  };