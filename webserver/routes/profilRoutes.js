import express from "express";

export let profilRoutes = express.Router();


// http://localhost:3000/profil?name=Simon&alter=37
profilRoutes.get('/', function (req, res) {
    console.log(req.query.name);
    console.log(req.query.alter);
    res.send('Moinsen User');
})

// http://localhost:3000/profil/27
profilRoutes.get(':userId', function (req, res) {
    const { userId } = req.params;
    console.log(userId);
    res.send('Moinsen User ' + userId);
})

profilRoutes.route("/userdata").get((req, res) => {
    res.send('Wurde angefragt');
}).post((req, res) => {
    res.send('Wurde angefragt');
}).put((req, res) => {
    res.send('Wurde angefragt');
}).delete((req, res) => {
    res.send('Wurde angefragt');
});