//il mio modulo controller dove scrivero tutta la mia logica di business

//importo il mio modulo con la connessione al mio db
const pool = require('../../db')

//la funzione con il quale scrivo la logica e la mia query per ricevere tutti gli studenti
const getStudents = (req, res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

//exporto la mia funzione
module.exports = {
    getStudents,
};