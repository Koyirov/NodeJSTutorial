const db = require("../database/db");

class Books {
    constructor() {
    }

    static findAll() {
        let stmt = "SELECT * FROM books;";
        return db.query(stmt)
    }
}

module.exports = Books
