"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./database");
const locationrouter_1 = require("./routes/locationrouter");
const cityrouter_1 = require("./routes/cityrouter");
const feedbackrouter_1 = require("./routes/feedbackrouter");
const restaurantrouter_1 = require("./routes/restaurantrouter");
const hostname = 'localhost';
const port = 3000;
const server = express();
server.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});
// initiate connection to db
const mysequelize = database_1.sequelize;
// add currencies route
server.use('/locations', locationrouter_1.locations);
server.use('/cities', cityrouter_1.cities);
server.use('/restaurants', restaurantrouter_1.restaurants);
server.use('/feedbacks', feedbackrouter_1.feedbacks);
server.listen(port, hostname, () => {
    // connect to the DB
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map