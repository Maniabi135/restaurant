import { Router } from 'express';
import { Location } from '../models/locationmodel';


export const locations = Router();

locations.get('/', (req, res, next) => {
    console.log('getting elements');
    Location.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});

locations.get('/:id', async (req, res, next) => {
    try {
      const loc = await Location.find({
        where: {
          location_id: req.params['id']
          }
      });
      res.json(loc);
    } catch (e) {
      next(e);
    }
});

locations.post('/', async (req, res, next) => {
    console.log(req.body);
    try {
        const fb = await Location.create(req.body);
        res.status(201).json(fb);
    } catch (e) {
        next(e);
    }
});

locations.post('/:id', async (req, res, next) => {
    console.log(req.params['id']);
    try {
        await Location.destroy({
          where: {
            location_id: req.params['id']
            }
        });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

locations.put('/:id', async (req, res, next) => {
    console.log(req.params['id']);
    console.log(req.body);
    try {
        await Location.update<Location>(req.body, {
          where: {
            id: req.params['id']
            }
        });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});
