var path = require('path');
var router = require('express').router();
var db = require('../models/');


var spotFunctions = {
    findAll: function (req,res) {
        db.Spot  
        .find(req.query)
        .sort({data: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Spot
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Spot
        .create(req.body)
        .then(dbSpot=>res.json(dbSpot))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Spot
        .findOneAndUpdate({_id: req.params.id},res.body)
        .then(dbSpot=> res.json(dbSpot))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Spot
        .findById({_id: req.params.id})
        .then(dbSpot=> dbSpot.remove())
        .then(dbSpot => res.json(dbSpot))
        .catch(err => res.status(422).json(err));
    }
}

router.get('/api/spots', spotFunctions.findAll)

router.post('/api/spots', spotFunctions.create)

router.delete('/api/spots/:id', spotFunctions.remove)

router.get('/api/spots/:id', spotFunctions.findById)

router.patch('/api/spots/:id', spotFunctions.update)


router.use(function (req, res) {
    res.sendFile(path.join(__dirname,
        '../client/build/index.html'));
});

module.exports = router;