//imposto la connessione al mio db postgres
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "postgres",
    port: 5432
});

module.exports = pool;