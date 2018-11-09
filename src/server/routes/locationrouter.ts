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

locations.post('/', async (req, res, next) => {
    console.log(req.body);
    console.log(req.body.location_name);
    // try {
    //   const fb = await Location.create(req.body);
    //   res.status(201).json(fb);
    // } catch (e) {
    //   next(e);
    // }
});
