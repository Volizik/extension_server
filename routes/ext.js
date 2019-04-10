const Router = require('koa-router');
const router = new Router();
const ext = new Router({prefix: '/api'});
const controller = require('../controllers/ext');

router.get('/', controller.getAllComputers);

ext.use('/ext', router.routes(), router.allowedMethods());

module.exports = ext;
