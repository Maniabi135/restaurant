import { Router } from 'express';
import { Location } from '../models/locationmodel';

export const locations = Router();

locations.get('/', (req, res, next) => {
    Location.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
