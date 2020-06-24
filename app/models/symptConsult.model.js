module.exports=(sequelize,Sequelize) => {
    const SymptConsult = sequelize.define("symptConsult", {
        idSymptome: {
            type: Sequelize.INTEGER,
            
            references: {
              model: "symptomes",
              key: "id",
              as: "idSymptome",
            },
            allowNull: false,
          }, 
          idConsultation: {
            type: Sequelize.INTEGER,
            
            references: {
              model: "consultations",
              key: "id",
              as: "idConsultation",
            },
            allowNull: false,
          }, 
          
    });
        return SymptConsult;
};