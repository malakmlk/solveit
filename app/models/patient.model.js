module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
      nss: {
        type: Sequelize.STRING
      },
     
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
     
      typeAssurance: {
        type: Sequelize.STRING
      }
    });
  
    return Patient;
  };