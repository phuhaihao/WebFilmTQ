const express = require('express');
const Router = express.Router();
const subscribeController = require('../controllers/SubscribeController');

// filmController.index
Router.get('/unsubscribe', subscribeController.unSubscribe);
Router.get('', subscribeController.subscribe);

module.exports = Router;