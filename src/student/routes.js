//importo router dal framework express
const {Router} = require('express');

//importo il modulo controller
const controller = require('./controller');

//inizializzo la variabile router con il Router
const router = Router();

router.get('/', controller.getStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudentsById);
router.delete('/:id', controller.removeStudent);


module.exports = router;

