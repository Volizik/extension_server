const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const send = require('koa-send');
const cors = require('koa2-cors');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = new Koa();
const routes = require('./routes');
const port = Number(process.env.PORT) || 5000;
const Router = require('koa-router');
const router = new Router();

mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected') )
    .catch((err) => console.log(err));

app.use(bodyParser());
app.use(cors());
app.use(serve(__dirname + '/dist/client'));
app.use(routes());
router.get('*', async (ctx) => {
    await send(ctx, '/dist/client/index.html')
});
app.use(router.routes());

app.listen(port, () => {console.log(`Server is running at ${port} port!`)});
