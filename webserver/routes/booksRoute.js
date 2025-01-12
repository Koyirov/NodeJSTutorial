import express from "express";
import booksController from "../databaseControllers/booksController";

// Middlewares
// import { Logger } from "../middlewares/logger";
import { requestLogger } from "../middlewares/requestLogger";

// Controllers
export let booksRoutes = express.Router();



booksRoutes.route("/")
    .get(booksController.getBooks, requestLogger, (req, res) => {})
    .post(booksController.addBooks, requestLogger, (req, res) => {})
    .put(booksController.updateBooks, requestLogger, (req, res) => {})
    .delete((req, res) => {
    res.send("wurde gelöscht");
});