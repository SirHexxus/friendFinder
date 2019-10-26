//  This file shall contain the Express routing information for all API GET/POST requests
const express = require('express');
const path = require('path');

const Friend = require('../data/friends.js');

const app = express();

//  Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  POST Request Route
const addFriend = (app) => {
    app.post('/api/newFriend', (req, res) => {
        let friendData = req.body;
        let newFriend = new Friend(friendData);
    })
}

//  Exporting the Routes data. It will be required in server.js
module.exports = {
    add     : addFriend
};