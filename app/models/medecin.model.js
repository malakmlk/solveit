module.exports = (sequelize, Sequelize) => {
    const Medecin = sequelize.define("medecin", {
      nom: {
        type: Sequelize.STRING
      },  
      hopitalId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Hopital",
          key: "id",
          as: "hopitalId",
        },
      }, 
      prenom: {
        type: Sequelize.STRING
      },
      speciality: {
        type: Sequelize.STRING
      },
      numTel: {
        type: Sequelize.INTEGER
      },
      bio: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type:Sequelize.DATE
      },
      adresse: {
        type:Sequelize.STRING
      }
    });
  
    return Medecin;
  };