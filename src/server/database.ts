import {Sequelize} from 'sequelize-typescript';
import { dbconfig } from '../../config';
import { Location } from './models/locationmodel';
import { City } from './models/citymodel';
import { Restaurant } from './models/restaurantmodel';
import { Feedback } from './models/feedbackmodel';

export const sequelize =  new Sequelize({
        database: dbconfig.database,
        dialect : dbconfig.dialect,
        username: dbconfig.username,
        password: dbconfig.password,
        host    : dbconfig.host,
        port    : dbconfig.port
});


sequelize.addModels([Location]);
sequelize.addModels([City]);
sequelize.addModels([Restaurant]);
sequelize.addModels([Feedback]);

initializeDatabase();


sequelize.authenticate().then(() => {
    console.log('Connected to DB');
})

.catch((err) => {
    console.log(err);
});

initializeDatabase();
// populateData();

// Force Initialization of the models and wipe all data ///
function initializeDatabase() {
    sequelize.sync({ force: false }).then(() => {
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
