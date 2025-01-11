import express from "express";
import booksController from "../databaseControllers/booksController";

// Middlewares
// import { Logger } from "../middlewares/logger";
import { requestLogger } from "../middlewares/requestLogger";

// Controllers
export let booksRoutes = express.Router();



booksRoutes.route("/")
    .get(booksController.getBooks, requestLogger, (req, res) => {})
    .post(booksController.addBooks, (req, res) => {})
    .put((req, res) => {
    res.send("wurde geupdated");
}).delete((req, res) => {
    res.send("wurde gelöscht");
});