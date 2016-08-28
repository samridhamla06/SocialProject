var mongoose = require(__dirname + '/db.js');
var location = new mongoose.Schema(
    {
        type:{type:String,default: 'Point'},
        coordinates:[{type : Number}]
    });

var userSchema = new mongoose.Schema({
    name:{type : String, required:true},
    location:{type:location,required:true},
    status: {type:String,enum:['undergoing', 'overcome','started'],required : true},
    city:{type:String,required:true},
    country:{type:String,required:true},
    email:{type : String, required:true,unique:true,index:true},
    doj:{type:Date,default: Date.now()},
    age:{type:Number,required:true},
    suffering:{type:String,required:true,default:'insomnia'}
});

var users = mongoose.model('users',userSchema);
module.exports = users;
