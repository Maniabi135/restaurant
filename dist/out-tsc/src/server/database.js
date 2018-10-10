"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../../config");
const locationmodel_1 = require("./models/locationmodel");
const citymodel_1 = require("./models/citymodel");
const restaurantmodel_1 = require("./models/restaurantmodel");
const feedbackmodel_1 = require("./models/feedbackmodel");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: config_1.dbconfig.database,
    dialect: config_1.dbconfig.dialect,
    username: config_1.dbconfig.username,
    password: config_1.dbconfig.password,
    host: config_1.dbconfig.host,
    port: config_1.dbconfig.port
});
exports.sequelize.addModels([locationmodel_1.Location]);
exports.sequelize.addModels([citymodel_1.City]);
exports.sequelize.addModels([restaurantmodel_1.Restaurant]);
exports.sequelize.addModels([feedbackmodel_1.Feedback]);
exports.sequelize.authenticate().then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});
initializeDatabase();
// populateData();
// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
    exports.sequelize.sync({ force: false }).then(() => {
        console.log('Connection synced');
        return;
    }).catch(err => {
        console.log('err');
    });
}
// Adding new currencies to the DB ///
// function populateData() {
//     const location = new Location({ location_name: 'Tamil Nadu', location_code: 'TN', country: 'India', country_code: 'IND' });
//     location.save().then(() => {
//         console.log('City ' + location.country + ' added to DB');
//     }).catch((err) => {
//         console.log(err);
//     });
// }
//# sourceMappingURL=database.js.map