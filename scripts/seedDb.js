const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Surf Spots collection and inserts the below sample books

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/surfDiary",
    {
        useNewUrlParser: true
    }
);

const surfSpot = [
    {
        spotName: "16th street",
        spotLocation: "Ocean Ave and 16th street, Belmar, NJ.",
        spotNotes: "Friendly people and good break.  Surf shop near by in case supplies are needed.  Parking is readily accessible on the street.",
        date: new Date(Date.now())
    },
    {
        spotName: "Sandy Hook",
        spotLocation: "Sandy Hook, NJ",
        spotNotes: "Parking available.  Restrooms and picnic tables near by.  Spot can get a little crowded.  The only known point break in New Jersey.",
        date: new Date(Date.now())
    }
];

const user = [
    {
        userName: "Some Guy",
        userEmail: "SomeGuy@aol.com",
        userHomeBreak: "Pipeline",
        userHomeBreakLat: 0,
        userHomeBreakLng: 0,
        userPassword: "password",
        userTimeStamp: new Date(Date.now())
    },
    {
        userName: "Andrew Flak",
        userEmail: "andrewmflak@gmail.com",
        userHomeBreak: "16 th Ave Belmar, NJ.",
        userHomeBreak: 0,
        userHomeBreakLng: 0,
        userPassword: "password",
        userTimeStamp: new Date(Date.now())
    }
]

// console.log(surfSpot);

db.Spot
    .deleteMany({})
    .then(() => db.Spot.collection.insertMany(surfSpot))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.User
    .deleteMany({})
    .then(() => db.Spot.collection.insertyMany(user)
    )
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });