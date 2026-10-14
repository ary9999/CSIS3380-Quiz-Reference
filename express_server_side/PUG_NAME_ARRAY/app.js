const express = require('express');
const app = express();


// ----------------------------------------------------
// PUG SETUP
// Usually KEEP this the same
// ----------------------------------------------------
app.set('view engine', 'pug');


// Reads form data from POST requests
// Usually KEEP this the same
app.use(express.urlencoded({ extended: false }));


// Lets us use files inside the public folder
// Example: public/style.css -> /static/style.css
app.use('/static', express.static('public'));


// ----------------------------------------------------
// DATA
// CHANGE this depending on the quiz
//
// Examples:
// const names = [];
// const students = [];
// const products = [];
// const movies = [];
// ----------------------------------------------------
const names = [];


// ----------------------------------------------------
// GET ROUTE
// Displays the page
//
// Change "names" if your array has a different name.
//
// res.render('index')
// means:
// render views/index.pug
// ----------------------------------------------------
app.get('/', (req, res) =>
{
    res.render('index', {

        // LEFT = variable name Pug receives
        // RIGHT = variable from app.js

        names: names
    });
});


// ----------------------------------------------------
// POST ROUTE
// Receives data from the form
//
// CHANGE:
// '/add' -> whatever route the quiz asks for
//
// Example:
// '/addStudent'
// '/addProduct'
// '/submit'
// ----------------------------------------------------
app.post('/add', (req, res) =>
{
    // CHANGE "name" to match the form input name
    //
    // Pug:
    // input(name="name")
    //
    // JavaScript:
    // req.body.name
    const name = req.body.name;


    // ------------------------------------------------
    // VALIDATION
    // Change depending on requirements
    // ------------------------------------------------
    if (!name || name.trim() === '')
    {
        return res.status(400).send('Invalid name');
    }


    // ------------------------------------------------
    // CHANGE what gets added to the array
    //
    // Example:
    // students.push(student);
    // products.push(product);
    // ------------------------------------------------
    names.push(name.trim());


    // After POST, reload GET /
    // Usually KEEP this the same
    res.redirect('/');
});


// ----------------------------------------------------
// START SERVER
// Usually KEEP this the same
// ----------------------------------------------------
app.listen(3000, () =>
{
    console.log('Server running on http://localhost:3000');
});