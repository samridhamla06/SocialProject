var mongoose = require(__dirname + '/db.js');
var loginSchema = new mongoose.Schema({
    email:{type : String, required:true,unique:true,index:true},
    password:{type:String,required:true}
});

var passwords = mongoose.model('passwords',loginSchema);
module.exports = passwords;
