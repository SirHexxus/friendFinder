//  Global Dependencies
const express = require('express');
const path = require('path');
const Friends = require('./data/friends.js');

//  Constants, Dependencies, and Variables for Express
const apiRoutes = require('./routing/apiRoutes.js');
const htmlRoutes = require('./routing/htmlRoutes.js');
const app = exress();

//  Constants, Dependencies, and Variables for Path
const homePath = './public/home.html';
const surveyPath = './public/survey.html';