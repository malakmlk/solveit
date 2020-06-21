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
      },
      numTel: {
        type: Sequelize.INTEGER
      },
      adresse: {
        type:Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type:Sequelize.DATE
      }
    });
  
    return Patient;
  };