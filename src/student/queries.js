//lista di tutte le query inizializzate in variabili, per separarle dalla logica di business

const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";


module.exports = {
    getStudents,
    getStudentsById
};