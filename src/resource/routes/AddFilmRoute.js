const express = require('express');
const Router = express.Router();
const addFilmController = require('../controllers/AddFilmController');

// filmController.index
Router.get('/addfilm', addFilmController.addFilm);
Router.post('/storefilm', addFilmController.storeFilm);

module.exports = Router;