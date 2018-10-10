import { Router } from 'express';
import { City } from '../models/citymodel';

export const cities = Router();


// cities.get('/', (req, res, next) => {
//     console.log('yes');
//     City.findAll().then((data) => {
//         return res.json(data);
//     }).catch((err) => {
//         console.log(err);
//         return err;
//     });
// });

cities.get('/:id', async (req, res, next) => {
    console.log('yes');
    // try {
    //   const fb = await City.scope(req.query['scope']).findById(req.params['id']);
    //   res.json(fb);
    // } catch (e) {
    //   next(e);
    // }
});
