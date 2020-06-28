module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
      nss: {
        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      sexe:{
        type: Sequelize.STRING
      },
      autreContactTel:{
        type: Sequelize.INTEGER    
        },
      autreContactEmail:{
       type: Sequelize.STRING
      },
      adresse: {
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type:Sequelize.DATE
      },
      etatCivile:{
        type: Sequelize.STRING
      },
    });
  
    return Patient;
  };