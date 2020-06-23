const fs = require('fs');

const db = require("../models");
const ficheAnalyse = db.ficheAnalyses;
 
// Upload a Multipart-File then saving it to MySQL database
exports.upload = (req, res) => {	
	ficheAnalyse.create({
		type: req.file.mimetype,
		idPatient:req.body.idPatient,
		name: req.file.originalname,
		data: fs.readFileSync(__basedir + '/resources/static/assets/uploads/' + req.file.filename)
	}).then(ficheAnalyse => {
		try{
			fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + ficheAnalyse.name, ficheAnalyse.data);		
			
			// exit node.js app
			res.json({'msg': 'File uploaded successfully!', 'file': req.file});
		}catch(e){
			console.log(e);
			res.json({'err': e});
		}
	})
};
exports.findAll = (req, res) => {
    const idPatient = req.query.idPatient;
    var condition = idPatient ? { idPatient: { [Op.like]: `%${idPatient}%` } } : null;
  
    ficheAnalyse.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving "
        });
      });
  };

  
