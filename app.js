var express = require('express');
var app = express();
var login = require(__dirname + '/routes/login.js');
var signup = require(__dirname + '/routes/signup.js');
var jwt = require('jsonwebtoken');
//var path = require('path');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.json());//post
app.use(bodyParser.urlencoded({extended: false}));//post

app.get('/*', function (req, res, next) {
    if (req.headers.token) {
        jwt.verify(token, "keykeykey", function (err, decoded) {
            if (err)
                res.send({status: "004"});//wrong token
            else
                next();
        });
    }

});

app.post('/*', function (req, res, next) {
    if (!req.body) {
        res.send({status: "005"});//null body
    } else
        next();
});

app.use('/login', login);
app.use('/signup', signup);
app.get('/', function (req, res) {
    res.send("Welcome to Hell Motherfucker");
});

module.exports = app;
