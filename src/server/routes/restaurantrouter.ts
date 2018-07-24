import { Router } from 'express';
import { Restaurant } from '../models/restaurantmodel';

export const restaurants = Router();

restaurants.get('/', (req, res, next) => {
    Restaurant.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
