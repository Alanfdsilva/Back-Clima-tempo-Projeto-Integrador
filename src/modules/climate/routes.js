const { Router } = require('express');
const ClimateController = require('../climate/controller/ClimateController.js');

const routes = new Router();
const climateController = new ClimateController();

routes.get('/uptime', climateController.uptime);

module.exports = routes;