import express from "express";

export let profilRoutes = express.Router();


// http://localhost:3000/profil?name=Simon&alter=37
profilRoutes.get('/', function (req, res) {
    res.render('main/profil', {
        layout: "layouts/htmlTwo",
        title: 'Profil Page',
    });
})

// http://localhost:3000/profil/27
profilRoutes.get(':userId', function (req, res) {
    const { userId } = req.params;
    console.log(userId);
    res.send('Moinsen User ' + userId);
})

profilRoutes.route("/userdata").get((req, res) => {
    res.render('main/userdata', {
        layout: "layouts/userdataHTML",
        title: 'User Data',
    });
}).post((req, res) => {

    console.log(req.body);
    res.send("wurde geschickt");
}).put((req, res) => {
    res.send("wurde geupdated");
}).delete((req, res) => {
    res.send("wurde gelöscht");
});