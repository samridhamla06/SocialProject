var express = require('express');
var passwords = require('./passwords.js');
var jwt = require('jsonwebtoken');
var router = express.Router();

function signToken(email, res) {//global function
    jwt.sign({email: email}, "keykeykey", {
        expiresIn: 1000
    }, function (err, token) {
        if (err) {
            console.log("error while assigning token " + JSON.stringify(err));
            res.send({status: "003"}); //couldn't use jwt
        }
        else
            res.send({status: "201", "token": token});
    });
}
router.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    passwords.find({email: email, password: password}, function (err, user) {
        if (err) {
            res.send({status: "000"});//couldn't connect to mongodb
        } else {
            if (user.length > 0) {
                signToken(email, res);
            }
            else
                res.send({status: "002"})//wrong information
        }// discuss with Ishaani...
    })
})

module.exports = router;
