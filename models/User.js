var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true},
    userPassword: {type: String, required: true},

},
    {versionKey: false})

var User = mongoose.model('user',userSchema);

module.exports = User;