const combineRoutes = require('koa-combine-routers');
const ext = require('./ext');
const site = require('./site');

const router = combineRoutes([
    site,
    ext
]);

module.exports = router;
