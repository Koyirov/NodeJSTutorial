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

    addBook() {

        let stmt = `INSERT INTO \`books\` (\`id\`, \`title\`, \`price\`, \`author\`) VALUES (NULL, '${this.title}', '${this.price}', '${this.author}');`;

        const addBook = db.execute(stmt);
        return addBook;
    }

    static updateBook(author, title) {
        db.execute(`UPDATE books SET author = ? WHERE title = ?`, [author, title]);
    }

    static deleteBook(title) {
        db.execute(`DELETE FROM books WHERE title = ?`, [title])
    }
}

module.exports = Books
