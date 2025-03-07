"use strict"

// Server settings
import { server, PORT } from "./server";
import MainLayouts from "express-ejs-layouts";
// Profil routes
import { profilRoutes } from "../routes/profilRoutes";
import express from "express";

import { booksRoutes } from "../routes/booksRoute";

//Statische Files
server.use(express.static("views/publics"));

//Middlewares
server.use(express.urlencoded({ extended: true }));

// server.use(Logger);

// Template engine
server.use(MainLayouts);
server.set("layout", "layouts/html");
server.set("view engine", "ejs");


// routen
server.get("/",  (req, res, next) => {
    res.render("main/index", {
        title: "Index",
        name: "Simone",
        nachname: "Müüüüller"
    });
})

server.use('/profil', profilRoutes);

server.use('/books', booksRoutes);


// 404 error handling
server.use((req, res, next) => {
    res.status(404).json({
        status: "Seite existiert nicht! 404 Error"
    });
})

server.listen(PORT, () => console.log('Server ist gestartet auf Port  ' + PORT));