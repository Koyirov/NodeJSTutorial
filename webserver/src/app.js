"use strict"
import { server, PORT } from "./server";

server.get('/', function (req, res) {
    res.send('Hello World')
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));