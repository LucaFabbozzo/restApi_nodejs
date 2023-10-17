//il mio modulo controller dove scrivero tutta la mia logica di business

//importo il mio modulo con la connessione al mio db
const pool = require('../../db');
const queries = require('./queries');

//la funzione dove scrivo la logica e importo la mia query per ricevere tutti gli studenti
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

//questa funzione progettata per gestire una richiesta per ottenere i dettagli di uno studente in base all'ID fornito
const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

//questa funzione aggiunge uno studente al db, prima controlla se l'email dello studente nuovo non coincide con un'altro studente precedentemente inserito, se non coincide, aggiuge lo studente
const addStudent = (req, res) => {
    const {name, email, age, dob } = req.body;
    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.send("Email already exists.");
        }

    // add student to db
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
        if(error) throw error;
        res.status(201).send("Student Created Successfully!");
    })
    })
}

//questa funzione controlla se uno studente è presente tramite il suo id se non è presente avvisa che non esiste nel database, se è presente lo rimuove
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student removed successfully.");
        })
    });
}

//exporto le mie funzioni all'interno di un'oggetto
module.exports = {
    getStudents,
    getStudentsById,
    addStudent,
    removeStudent,
};