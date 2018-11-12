"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationmodel_1 = require("../models/locationmodel");
exports.locations = express_1.Router();
exports.locations.get('/', (req, res, next) => {
    console.log('getting elements');
    locationmodel_1.Location.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
exports.locations.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const loc = yield locationmodel_1.Location.find({
            where: {
                location_id: req.params['id']
            }
        });
        res.json(loc);
    }
    catch (e) {
        next(e);
    }
}));
exports.locations.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const fb = yield locationmodel_1.Location.create(req.body);
        res.status(201).json(fb);
    }
    catch (e) {
        next(e);
    }
}));
exports.locations.post('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.params['id']);
    try {
        yield locationmodel_1.Location.destroy({
            where: {
                location_id: req.params['id']
            }
        });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
exports.locations.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.params['id']);
    try {
        yield locationmodel_1.Location.update(req.body, {
            where: {
                id: req.params['id']
            }
        });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=locationrouter.js.map