import * as express from 'express';
import { sequelize } from './database';
import { locations } from './routes/locationrouter';
import { cities } from './routes/cityrouter';
import { feedbacks } from './routes/feedbackrouter';
import { restaurants } from './routes/restaurantrouter';
import * as http from 'http';
import {
  json,
  raw,
  text,
  urlencoded,
} from 'body-parser';

const hostname = 'localhost';
const port     = 3000;

const server = express();
server.use(json());
server.use(raw());
server.use(text());
server.use(urlencoded());

server.get('/', (req, res, next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
});

server.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));

// initiate connection to db
const mysequelize = sequelize;

// add currencies route
server.use('/locations', locations);
server.use('/cities', cities);
server.use('/restaurants', restaurants);
server.use('/feedbacks', feedbacks);

server.listen(port, hostname, () => {
     // connect to the DB
   console.log(`Server running at http://${hostname}:${port}/`);
});
