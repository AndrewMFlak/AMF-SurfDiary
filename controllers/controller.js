const path = require('path');
const router = require('express').Router();
const db = require('../models');

// surf spot functions for db post
const spotFunctions = {
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
        .then(dbModel=>res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Spot
        .findOneAndUpdate({_id: req.params.id},res.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Spot
        .findById({_id: req.params.id })
        .then(dbModel=> dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    }
}

router.get('/api/spots', spotFunctions.findAll)

router.post('/api/spots', spotFunctions.create)

router.delete('/api/spots/:id', spotFunctions.remove)

router.get('/api/spots/:id', spotFunctions.findById)

router.patch('/api/spots/:id', spotFunctions.update)

// User functions for db post
const userFunctions = {
    findAll: function (req,res) {
        db.User
        .find(req.query)
        .sort({data: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
        .findOneAndUpdate({_id: req.params.id},res.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
        .findById({_id:req.params.id})
        .then(dbModel=> dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    }
}

router.get('/api/users',userFunctions.findAll)

router.post('/api/users', userFunctions.create)

router.delete('/api/users/:id', userFunctions.remove)

router.get('/api/users/:id', userFunctions.findById)

router.patch('/api/users/:id', userFunctions.update)




router.use(function (req, res) {
    res.sendFile(path.join(__dirname,
        '../client/build/index.html'));
});

module.exports = router;