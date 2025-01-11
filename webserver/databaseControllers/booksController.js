const Books = require('../databaseModels/Books');


exports.getBooks = async (req, res, next) => {
    try {
        const books = await Books.findAll();

        res.render('main/books', {
            layout: "layouts/booksHTML",
            title: "Bücher",
            books: books[0],
        });
        next();
    }catch(err) {
        console.log("Ein Fehler aufgetreten: " +err);
    }
}

exports.addBooks = async (req, res, next) => {
    try {
        let formdata = req.body;
        console.log(formdata);
        res.redirect("/books");
    } catch (err) {
        console.log("Ein Fehler aufgetreten: " + err);
    }
}

