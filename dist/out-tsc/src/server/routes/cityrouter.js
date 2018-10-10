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
exports.cities = express_1.Router();
// cities.get('/', (req, res, next) => {
//     console.log('yes');
//     City.findAll().then((data) => {
//         return res.json(data);
//     }).catch((err) => {
//         console.log(err);
//         return err;
//     });
// });
exports.cities.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('yes');
    // try {
    //   const fb = await City.scope(req.query['scope']).findById(req.params['id']);
    //   res.json(fb);
    // } catch (e) {
    //   next(e);
    // }
}));
//# sourceMappingURL=cityrouter.js.map