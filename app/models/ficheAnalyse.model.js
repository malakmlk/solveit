module.exports = (sequelize, Sequelize) => {
	const FicheAnalyse = sequelize.define('ficheAnalyse', {
	  type: {
		type: Sequelize.STRING
	  },
	  idPatient: {
		type: Sequelize.STRING
	  },
	  name: {
		type: Sequelize.STRING
	  },
	  data: {
		type: Sequelize.BLOB('long')
	  }
	});
	
	return FicheAnalyse;
}