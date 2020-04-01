const express = require('express');
const connection= require('./database/connection')  ;
const routes = express.Router();
const charcontroller= require('./controllers/charcontroller');
const questcontroller= require('./controllers/questcontroller');
const profilecontroller= require('./controllers/profilecontroller');
const sessioncontroller= require('./controllers/sessioncontroller');
routes.get('/char', charcontroller.index);

routes.post('/session', sessioncontroller.login);
routes.post('/profile',profilecontroller.search);
routes.get('/profile',profilecontroller.index);
routes.post('/char', charcontroller.create);
routes.get('/quest',questcontroller.index);
routes.post('/quest',questcontroller.create);
routes.delete('/quest/:id',questcontroller.delete);
module.exports= routes;