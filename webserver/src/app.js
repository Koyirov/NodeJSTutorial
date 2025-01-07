"use strict"
import { server, PORT } from "./server";
import { profilRoutes } from "../routes/profilRoutes";

server.get("/", (req, res) => {
    res.send("Hallo Welt");
})

server.use('/profil', profilRoutes);


// 404 error handling
server.use((req, res, next) => {
    res.status(404).json({
        status: "Seite existiert nicht! 404 Error"
    });
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));