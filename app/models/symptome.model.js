

module.exports=(sequelize,Sequelize) => {
    const Symptome = sequelize.define("symptome", {
        description: {
          type: Sequelize.STRING
        }
    });
        return Symptome;
};