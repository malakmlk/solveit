
module.exports=(sequelize,Sequelize) => {
    const Maladie = sequelize.define("maladie", {
        
        id: {
        
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER 
          },
        libellé: {
          type: Sequelize.STRING
        }
    });
        return Maladie;
};