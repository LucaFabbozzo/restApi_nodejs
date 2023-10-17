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

//exporto la mia funzione all'interno di un'oggetto
module.exports = {
    getStudents,
    getStudentsById
};