const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const controller = require('./controller')
const rest = require('./rest');

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyparser());

// bind .rest() for ctx:
app.use(rest.restify());

// add controllers:
app.use(controller());
// koa 默认监听端口 3000
//app.listen(4000)
module.exports = app
