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
const feedbackmodel_1 = require("../models/feedbackmodel");
exports.feedbacks = express_1.Router();
exports.feedbacks.get('/', (req, res, next) => {
    feedbackmodel_1.Feedback.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
exports.feedbacks.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const fb = yield feedbackmodel_1.Feedback.scope(req.query['scope']).findById(req.params['id']);
        res.json(fb);
    }
    catch (e) {
        next(e);
    }
}));
exports.feedbacks.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const fb = yield feedbackmodel_1.Feedback.create(req.body);
        res.status(201).json(fb);
    }
    catch (e) {
        next(e);
    }
}));
exports.feedbacks.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield feedbackmodel_1.Feedback.update(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=feedbackrouter.js.map