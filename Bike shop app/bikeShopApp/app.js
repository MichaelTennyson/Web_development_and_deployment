//Required modules
const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();

// For the body parser to collect data
app.use(express.urlencoded( { extended : false}));


// Allowing static files to be use by specifying the path of the public folder
app.use(express.static(path.join(__dirname, 'public')));


// Template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// session
app.use(session({
    secret:'application',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


// Routers
app.use('/', pageRouter);


//errors
app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});

// Server is set up
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = app;