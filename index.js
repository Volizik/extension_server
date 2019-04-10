const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const app = new Koa();
const routes = require('./routes');

app.use(bodyParser());
app.use(cors());
app.use(routes());
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000, () => {console.log('Server is running!')});
