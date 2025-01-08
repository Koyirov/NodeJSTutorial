"use strict"

// Server settings
import { server, PORT } from "./server";
import MainLayouts from "express-ejs-layouts";
// Profil routes
import { profilRoutes } from "../routes/profilRoutes";
import express from "express";

//Statische Files
server.use(express.static("views/publics"));

// Template engine
server.use(MainLayouts);
server.set("layout", "layouts/html");
server.set("view engine", "ejs");

// routen
server.get("/", (req, res) => {
    res.render("main/index", {
        title: "Index",
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