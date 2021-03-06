"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const baseURL = 'http://localhost:3000/';
let LocationService = class LocationService {
    constructor(http) {
        this.http = http;
    }
    getAllLocationData() {
        return this.http.get(baseURL + 'locations', { responseType: 'json' });
    }
    createLocationData(location_name, location_code, location_id, country, country_code) {
        const createData = {
            location_name,
            location_code,
            location_id,
            country,
            country_code
        };
        return this.http.post(baseURL + 'locations', createData);
    }
    getData(id) {
        return this.http.get(baseURL + 'locations/' + id, { responseType: 'json' });
    }
    updateLocationData(id, location_name, location_code, location_id, country, country_code) {
        const updateData = {
            location_name,
            location_code,
            location_id,
            country,
            country_code
        };
        return this.http.put(baseURL + 'locations/' + id, updateData);
    }
    deleteLocationData(id) {
        console.log(id);
        return this.http.post(baseURL + 'locations/' + id, { responseType: 'json' });
    }
};
LocationService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map