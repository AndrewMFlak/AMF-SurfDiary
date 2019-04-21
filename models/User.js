var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userHomeBreak: {type: String, required: true},
    userHomeBreakLat: {type:String, required: false},
    userHomeBreakLng: {type: String, required: false},
    userPassword: {type: String, required: true},
    userDate: {type: Date, default: Date.now}
},
    {versionKey: false})

var User = mongoose.model('user',userSchema);

module.exports = User;