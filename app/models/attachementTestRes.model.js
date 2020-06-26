module.exports=(sequelize,Sequelize) => {
    const AttachementTestRes = sequelize.define("attachementTestRes", {
        comment: {
            type: Sequelize.STRING
          },  
        idResTes: {
            type: Sequelize.INTEGER,
            references: {
              model: "ficheAnalyses",
              key: "id",
              as: "idResTes",
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
    return AttachementTestRes;
};