"use strict"

// Server settings
import { server, PORT } from "./server";
// Profil routes
import { profilRoutes } from "../routes/profilRoutes";

// Template engine
server.set("view engine", "ejs");

// routen
server.get("/", (req, res) => {
    res.render("index", {
        name: "Simone",
        nachname: "Müüüüller"
    });
})

server.use('/profil', profilRoutes);


// 404 error handling
server.use((req, res, next) => {
    res.status(404).json({
        status: "Seite existiert nicht! 404 Error"
    });
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));