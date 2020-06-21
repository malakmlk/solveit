module.exports = (sequelize, Sequelize) => {
    const Hopital = sequelize.define("hopital", {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
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
      dateCreation: {
        type:Sequelize.DATE
      }
    });
  
    return  Hopital;
  };