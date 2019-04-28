const Router = require('koa-router');
const router = new Router();
const site = new Router({prefix: '/api'});
const controller = require('../controllers/site');

router
    .get('/', controller.getAllComputersInfo)
    .post('/add_computer', controller.saveComputerInfo)
    .post('/del_computer', controller.removeComputer)
    .get('/computers_list', controller.getSavedComputers);

site.use('/site', router.routes(), router.allowedMethods());

module.exports = site;
