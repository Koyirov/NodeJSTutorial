const db = require("../database/db");

class Books {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    static findAll() {
        let stmt = "SELECT * FROM books;";
        return db.query(stmt)
    }

    static addBooks() {
        let stmt = `INSERT INTO books (title, author, price)`;
        return db.query(stmt)
    }
}

module.exports = Books
