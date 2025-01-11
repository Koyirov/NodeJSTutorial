import express from "express";
// Database
import { db }  from "../database/db";

export let booksRoutes = express.Router();



booksRoutes.route("/").get((req, res) => {
    db.query(
        'SELECT * FROM `books`',
        function (err, results, fields) {
            //console.log(results); // results contains raws returned by server

            res.render('main/books', {
                layout: "layouts/booksHTML",
                title: "Bücher",
                books: results,
            });
        }
    );

}).post((req, res) => {
    res.send("wurde geschickt");
}).put((req, res) => {
    res.send("wurde geupdated");
}).delete((req, res) => {
    res.send("wurde gelöscht");
});