//importo router dal framework express
const {Router} = require('express');

//importo il modulo controller
const controller = require('./controller');

//inizializzo la variabile router con il Router
const router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentsById);

module.exports = router;

