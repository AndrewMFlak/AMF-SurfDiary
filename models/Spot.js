var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const spotSchema = new Schema({
    spotName: {type: String, required: true},
    spotAddress: {type: String, required: true}
});

var Spot = mongoose.model('Spot',spotSchema);

module.exports = Spot;