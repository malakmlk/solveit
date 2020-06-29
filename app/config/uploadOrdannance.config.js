const multer = require('multer');


var storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null,__basedir + '/resources/static/assets/uploads/ordannances/')
	},
	filename: (req, file, cb) => {
	  cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
	}
});


var uploadOrdannance = multer({storage: storage});
module.exports=uploadOrdannance;
