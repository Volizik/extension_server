const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = new Koa();
const routes = require('./routes');
const port = Number(process.env.PORT) || 5000;
// const getIpInfo = require('./middleware/ipInfo');

// const info = getIpInfo('119.82.252.1').then(res => console.log(res));

mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected') )
    .catch((err) => console.log(err));

app.use(bodyParser());
app.use(cors());
app.use(routes());
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(port, () => {console.log(`Server is running at ${port} port!`)});
