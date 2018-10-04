var mongoose = require('mongoose')
var schema = mongoose.schema;

const spotSchema = new schema({
    spotName: {type: String, required: true},
    spotAddress: {type: String, required: true}
});

var Spot = mongoose.model('Spot',spotSchema);

module.exports = Spot;