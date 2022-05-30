const express = require('express');
const Router = express.Router();
const filmController = require('../controllers/FilmController');

// filmController.index
Router.get('/', filmController.show);

module.exports = Router;