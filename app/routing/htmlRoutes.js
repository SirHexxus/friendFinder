//  This file shall contain the Express routing information for all HTML requests
const express = require('express');
const path = require('path');

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
const defaultRoute = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}

const homeRoute = (app) => {
    app.get('/home', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });
}

const surveyRoute = (app) => {
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })
}

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  
//  Exporting the Routes data. It will be required in server.js
module.exports = {
    default     : defaultRoute,
    home        : homeRoute,
    survey      : surveyRoute
};