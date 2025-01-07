"use strict"
import { server, PORT } from "./server";

server.get('/', function (req, res) {
    res.json({
        name: "Max",
        alter: 36,
        geburtsort: "USA",
        besitz: {
            auto: "VW-Golg",
            buch: "Bla"
        }
    });
})

server.post('/profil', function (req, res) {
    res.send('Moinsen User')
})


// 404 error handling
server.use((req, res, next) => {
    res.status(404).json({
        status: "Seite existiert nicht! 404 Error"
    });
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));