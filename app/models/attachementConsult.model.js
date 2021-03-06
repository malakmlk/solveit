module.exports=(sequelize,Sequelize) => {
    const AttachementConsult = sequelize.define("attachementConsult", {
        comment: {
            type: Sequelize.STRING
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
        idSignal: {
            type: Sequelize.INTEGER,
            references: {
              model: "signals",
              key: "id",
              as: "idSignal",
            },
            allowNull: false,
          }, 
    });
    return AttachementConsult;
};