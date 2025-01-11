import express from "express";
import booksController from "../databaseControllers/booksController";

// Middlewares
// import { Logger } from "../middlewares/logger";
import { requestLogger } from "../middlewares/requestLogger";

// Controllers
export let booksRoutes = express.Router();



booksRoutes.route("/").get(booksController.getBooks, requestLogger, (req, res) => {

}).post((req, res) => {
    res.send("wurde geschickt");
}).put((req, res) => {
    res.send("wurde geupdated");
}).delete((req, res) => {
    res.send("wurde gelöscht");
});