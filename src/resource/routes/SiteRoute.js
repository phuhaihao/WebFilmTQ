const express = require('express');
const Router = express.Router();
const siteController = require('../controllers/SiteController');

// filmController.index
Router.get('/addsubscribe', siteController.addSubscribe);
Router.get('', siteController.index);

module.exports = Router;