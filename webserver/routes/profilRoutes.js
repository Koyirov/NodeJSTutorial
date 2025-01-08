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
        layout: "layouts/htmlThree",
        title: 'User Data',
    });
}).post((req, res) => {
    res.render('main/userdata', {
        layout: "layouts/htmlThree",
        title: 'User Data',
    });
}).put((req, res) => {
    res.render('main/userdata', {
        layout: "layouts/htmlThree",
        title: 'User Data',
    });
}).delete((req, res) => {
    res.render('main/userdata', {
        layout: "layouts/htmlThree",
        title: 'User Data',
    });
});