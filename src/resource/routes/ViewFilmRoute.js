const express = require('express');
const Router = express.Router();
const viewFilmController = require('../controllers/ViewFilmController');

// filmController.index
Router.get('', viewFilmController.view);

module.exports = Router;