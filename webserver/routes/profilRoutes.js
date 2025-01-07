import express from "express";

export let profilRoutes = express.Router();


profilRoutes.get('/', function (req, res) {
    res.json({
        name: "Max",
        alter: 36,
        geburtsort: "USA",
        besitz: {
            auto: "VW-Golg",
            buch: "Bla"
        }
    });
})

// http://localhost:3000/profil?name=Simon&alter=37
profilRoutes.get('/profil', function (req, res) {
    console.log(req.query.name);
    console.log(req.query.alter);
    res.send('Moinsen User');
})

// http://localhost:3000/profil/27
profilRoutes.get('/profil/:userId', function (req, res) {
    const { userId } = req.params;
    console.log(userId);
    res.send('Moinsen User ' + userId);
})