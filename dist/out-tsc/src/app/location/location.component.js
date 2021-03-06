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
const location_service_1 = require("./location.service");
const city_service_1 = require("../city/city.service");
const router_1 = require("@angular/router");
let LocationComponent = class LocationComponent {
    constructor(locationService, cityService, router) {
        this.locationService = locationService;
        this.cityService = cityService;
        this.router = router;
        this.emptyLocation = [
            'location_name',
            'location_code',
            'location_id',
            'country',
            'country_code',
        ];
        this.populateLocation = [];
        this.footer_list = ['Privacy', 'Terms', 'API Policy', 'CSR', 'Security', 'Sitemap'];
        this.social_media = ['facebook', 'instagram', 'twitter'];
        this.location_list = [
            { 'label': 'Location Name', 'name': 'location_name' },
            { 'label': 'Location Code', 'name': 'location_code' },
            { 'label': 'Location Id', 'name': 'location_id' },
            { 'label': 'Country', 'name': 'country' },
            { 'label': 'Country Code', 'name': 'country_code' }
        ];
    }
    ngOnInit() {
        this.getLocationData();
    }
    sendData() {
        if (this.buttonTitle === 'Add') {
            this.createLocation();
        }
        else {
            this.updateLocation();
        }
    }
    emptyModalData() {
        this.cur_loc_id = '';
        this.emptyLocation.forEach(key => this[key] = '');
        this.buttonTitle = 'Add';
    }
    getLocationData() {
        this.locationService.getAllLocationData().subscribe(data => this.locationData = data, err => console.log(err), () => console.log('All Location Data completed'));
    }
    createLocation() {
        // tslint:disable-next-line:max-line-length
        this.locationService.createLocationData(this.location_name, this.location_code, this.location_id, this.country, this.country_code).subscribe(data => this.locationData.push(data), err => console.log(err), () => {
            console.log('Created completed');
            this.getLocationData();
            this.emptyLocation.forEach(key => this[key] = '');
        });
    }
    updateLocation() {
        // tslint:disable-next-line:max-line-length
        this.locationService.updateLocationData(this.cur_loc_id, this.location_name, this.location_code, this.location_id, this.country, this.country_code).subscribe(err => console.log(err), () => {
            console.log('updated completed');
            this.getLocationData();
            this.emptyLocation.forEach(key => this[key] = '');
        });
    }
    updateData(location) {
        this.emptyLocation.forEach(key => this[key] = location[key]);
        this.buttonTitle = 'Update';
        this.cur_loc_id = location.id;
    }
    deleteLocation(id) {
        console.log(id);
        this.locationService.deleteLocationData(id).subscribe(err => console.log(err), () => {
            console.log('Deleted completed');
            this.getLocationData();
        });
    }
    getAllCityData(id) {
        this.router.navigate(['/']);
        this.cityService.getAllCityData(id).subscribe(data => this.cityData = data, err => console.log(err), () => {
            console.log('City Navigation completed');
        });
        console.log(this.cityData);
    }
};
LocationComponent = __decorate([
    core_1.Component({
        selector: 'app-location',
        templateUrl: './location.component.html',
        styleUrls: ['./location.component.css']
    }),
    __metadata("design:paramtypes", [location_service_1.LocationService, city_service_1.CityService, router_1.Router])
], LocationComponent);
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map