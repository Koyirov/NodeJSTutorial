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

        let book = new Books(formdata.title, formdata.author, 4.99);
        book.addBook();

        res.redirect("/books");
        next();
    } catch (err) {
        console.log("Ein Fehler aufgetreten: " + err);
    }
}

exports.updateBooks = async (req, res, next) => {
   try {
       let formdata = req.headers;

       if(formdata.author === undefined || formdata.title === undefined){
           res.json("author & title is required");
       }else{
           await Books.updateBook(formdata.author, formdata.title);

           res.json("Update erfolgreich!");
           // res.redirect("/books");
           next();
       }
   }  catch (err) {
       console.log("Ein Fehler aufgetreten: " + err);
   }
}

