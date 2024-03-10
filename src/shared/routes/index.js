const { Router } = require('express');

const climateRouter = require('../../modules/climate/routes')

const routes = Router();

routes.get('/', (req, res) => {
    res.status(403).send('Forbidden');
});

routes.use(climateRouter);

module.exports = routes;