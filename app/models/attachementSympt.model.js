module.exports=(sequelize,Sequelize) => {
    const AttachementSympt = sequelize.define("attachementSympt", {
        comment: {
            type: Sequelize.STRING
          },  
        idSymptome: {
            type: Sequelize.INTEGER,
            references: {
              model: "symptomes",
              key: "id",
              as: "idSymptome",
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
    return AttachementSympt;
};