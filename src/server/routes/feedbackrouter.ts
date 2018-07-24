import { Router } from 'express';
import { Feedback } from '../models/feedbackmodel';

export const feedbacks = Router();

feedbacks.get('/', (req, res, next) => {
    Feedback.findAll().then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});


feedbacks.get('/:id', async (req, res, next) => {
    try {
      const fb = await Feedback.scope(req.query['scope']).findById(req.params['id']);
      res.json(fb);
    } catch (e) {
      next(e);
    }
});

feedbacks.post('/', async (req, res, next) => {
    try {
      const fb = await Feedback.create(req.body);
      res.status(201).json(fb);
    } catch (e) {
      next(e);
    }
});

feedbacks.put('/:id', async (req, res, next) => {
    try {
      await Feedback.update<Feedback>(req.body, {where: {id: req.params['id']}});
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
});
