var express = require('express');
var users = require('./user.js');
var router = express.Router();
router.post('/', function (req, res) {
    users.create(req.body,function(err){
        if (err){
            console.log("error is " + JSON.stringify(err));
            res.send({status: "000"});
        }else{
            res.send({status: "202"});//registd
        }
    });


})
module.exports = router;
