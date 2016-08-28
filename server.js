/**
 * Created by samridhamla06 on 27/08/16.
 */
var app = require(__dirname + '/app.js');
var http = require('http');
var server = http.createServer(app);

server.listen(8000,function(err){
    if(!err){
        console.log("Server is running at 8000");
    }

});
