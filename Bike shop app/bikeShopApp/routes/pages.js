//required modules
const express = require('express');
const User = require('../core/user');
const router = express.Router();

const user = new User();

// The index page
router.get('/', (req, res, next) => {
    let user = req.session.user;
    // Creating a home page link
    if(user) {
        res.redirect('/home');
        return;
    }

    res.render('index', {title:"Bike Shop"});
})

// Get home page
router.get('/home', (req, res, next) => {
    let user = req.session.user;

    if(user) {
        res.render('home', {opp:req.session.opp, name:user.fullname});
        return;
    }
    res.redirect('/');
});

// Post login data
router.post('/login', (req, res, next) => {
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            // redirect the user to the home page.
            res.redirect('/home');
        }else {

            res.send('Username/Password incorrect!');
        }
    })

});


// Post register data
router.post('/register', (req, res, next) => {
    //passing user inputs username and fullname
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };
    // Function to create new user
    user.create(userInput, function(lastId) {
        
        if(lastId) {
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});


// Loggout page:
router.get('/loggout', (req, res, next) => {
    // Check if session exists
    if(req.session.user) {
        // delete session and return use to main page
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;