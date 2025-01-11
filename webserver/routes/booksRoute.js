import express from "express";

export let booksRoutes = express.Router();


booksRoutes.get('/', function (req, res) {
    res.render('books');
})