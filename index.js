// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

//import morgan libary
const morgan = require('morgan')

//add morgan middleware library
app.use(morgan('dev'));

 // serve up the public folder as static index.html file
app.use(express.static('public'));

// // GET - / - returns homepage
// app.get('/', (req, res) => {
//     // serve up the public folder as static index.html file
    
// });

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello to my fellow coders!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets)
});

// get pet by owner with query string ?owner = owenerName
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const { owner } = req.query

    // find the pet in the pets array
    const pet = pets.filter(pet => pet.owner.toLowerCase() === owner.toLowerCase());

    // send the pet as a response
    res.send(pet)
});

// get pet by name like /fido
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const { name } = req.params

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());
  
    // send the pet as a response
    res.send(pet)
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;