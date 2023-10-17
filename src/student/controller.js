//il mio modulo controller dove scrivero tutta la mia logica di business

//importo il mio modulo con la connessione al mio db
const pool = require('../../db');
const queries = require('./queries');

//la funzione con il quale scrivo la logica e la mia query per ricevere tutti gli studenti
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

//exporto la mia funzione all'interno di un'oggetto
module.exports = {
    getStudents,
};