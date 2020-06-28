module.exports=(sequelize,Sequelize) => {
    const HistoriqueMédical = sequelize.define("historiqueMedical", {
        idPatient: {
            type: Sequelize.INTEGER,
            
            references: {
              model: "patients",
              key: "nss",
              as: "idPatient",
            },
            allowNull: false,
          }, 
        idMaladie: {
            type: Sequelize.INTEGER,
            
            references: {
              model: "maladies",
              key: "id",
              as: "idMaladie",
            },
            allowNull: false,
          }, 
          
    });
        return HistoriqueMédical;
};