"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const core_2 = require("@angular/core");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/common/http");
const location_component_1 = require("./location/location.component");
const city_component_1 = require("./city/city.component");
const restaurant_component_1 = require("./restaurant/restaurant.component");
const app_routing_module_1 = require("./app-routing.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            location_component_1.LocationComponent,
            city_component_1.CityComponent,
            restaurant_component_1.RestaurantComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        schemas: [
            core_2.CUSTOM_ELEMENTS_SCHEMA,
            core_2.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map