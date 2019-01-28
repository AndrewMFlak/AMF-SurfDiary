var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const spotSchema = new Schema({
    spotName: {type: String, required: true},
    spotLocation: {type: String, required: true},
    spotNotes: String,
    date: {type: Date, default: Date.now}
});

var Spot = mongoose.model('surfSpot',spotSchema);

module.exports = Spot;