const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.medecins = require("./medecin.model.js")(sequelize, Sequelize);
db.patients = require("./patient.model.js")(sequelize, Sequelize);
db.hopitals = require("./hopital.model.js")(sequelize, Sequelize);
db.ficheAnalyses = require("./ficheAnalyse.model.js")(sequelize, Sequelize);
db.consultations = require("./consultation.model.js")(sequelize, Sequelize);
db.symptomes = require("./symptome.model.js")(sequelize, Sequelize);
db.symptConsults=require("./symptConsult.model.js")(sequelize, Sequelize);
db.signals=require("./signal.model.js")(sequelize, Sequelize);
db.attachementConsults=require("./attachementConsult.model.js")(sequelize, Sequelize);
db.attachementSympts=require("./attachementSympt.model.js")(sequelize, Sequelize);
db.attachementTestRess=require("./attachementTestRes.model.js")(sequelize, Sequelize);
db.maladies=require("./maladie.model.js")(sequelize, Sequelize);
db.historiqueMédicals=require("./historiqueMedical.model.js")(sequelize, Sequelize);
db.willayas=require("./willaya.model.js")(sequelize, Sequelize);
module.exports = db;