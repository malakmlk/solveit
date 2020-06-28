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
      idWillaya: {
        type: Sequelize.INTEGER,
        
        references: {
          model: "willayas",
          key: "codeWillaya",
          as: "idWillaya",
        },
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