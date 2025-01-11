import express from "express";
import {profilRoutes} from "./profilRoutes";

export let booksRoutes = express.Router();



booksRoutes.route("/").get((req, res) => {
    res.render('main/books', {
        layout: "layouts/booksHTML",
        title: "Bücher",
    });
}).post((req, res) => {
    res.send("wurde geschickt");
}).put((req, res) => {
    res.send("wurde geupdated");
}).delete((req, res) => {
    res.send("wurde gelöscht");
});