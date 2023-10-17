//importo express - framework di nodejs
const express = require('express');
//importo il modulo routes
const studentRoutes = require('./src/student/routes');

//variabili app che sarebbe il punto di partenza di express
const app = express();
//la porta del mio server locale
const port = 3000;

//il middleware per utilizzare ricevere come risposta un json
app.use(express.json());

//richiesta get di prova
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//utilizzo direttamente il modulo routes per ricevere tutti i miei studenti
app.use('/api/v1/students', studentRoutes);



app.listen(port, () => console.log(`app listening on port ${port}`));