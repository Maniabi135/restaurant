"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationmodel_1 = require("../models/locationmodel");
exports.locations = express_1.Router();
exports.locations.get('/', (req, res, next) => {
    locationmodel_1.Location.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
//# sourceMappingURL=locationrouter.js.map