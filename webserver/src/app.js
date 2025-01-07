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

server.get('/profil', function (req, res) {
    res.send('Moinsen User');
})

server.get('/profil/:userId', function (req, res) {
    const { userId } = req.params;
    console.log(userId);
    res.send('Moinsen User ' + userId);
})


// 404 error handling
server.use((req, res, next) => {
    res.status(404).json({
        status: "Seite existiert nicht! 404 Error"
    });
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));