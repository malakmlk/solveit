module.exports=(sequelize,Sequelize) => {
    const Willaya = sequelize.define("willaya", {
       codeWillaya: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
        nom: {
          type: Sequelize.STRING
        }
    });
        return Willaya;
};