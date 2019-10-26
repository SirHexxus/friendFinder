//  Global Dependencies
const express = require('express');
const path = require('path');
const Friends = require('./data/friends.js');

//  Constants, Dependencies, and Variables for Express
const apiRoutes = require('./routing/apiRoutes.js');
const htmlRoutes = require('./routing/htmlRoutes.js');
const app = express();
const PORT = process.env.PORT || 8008;
//  //  Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Constants, Dependencies, and Variables for Path

//  Routing
//  //  HTML Routes
htmlRoutes.default(app);
htmlRoutes.home(app);
htmlRoutes.survey(app);

//  //  API Routes

// Starts the server listening to PORT
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});