"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurantmodel_1 = require("../models/restaurantmodel");
exports.restaurants = express_1.Router();
exports.restaurants.get('/', (req, res, next) => {
    restaurantmodel_1.Restaurant.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
//# sourceMappingURL=restaurantrouter.js.map