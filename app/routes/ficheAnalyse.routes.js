module.exports = function(app){
	const upload = require('../config/upload.config.js');
	const fileWorker = require('../controllers/ficheAnalyse.controller.js');
	
  
    
	app.post('/api/uploadfile', upload.single("uploadfile"), fileWorker.upload);
	app.get('/api/uploadfile', fileWorker.findAll);
} 