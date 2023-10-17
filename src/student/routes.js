//importo router dal framework express
const {Router} = require('express');

//importo il modulo controller
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);

module.exports = router;

