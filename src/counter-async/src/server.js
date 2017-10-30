const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

const sleep = (millisecond) => {
    let start = new Date();
    while(new Date() - start <= millisecond) {

    }
};

let toggleSuccess = 0;

app.use(cors());
app.use(koaBody());

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
    console.log(11);
});

router.post('/calculate', async (ctx, next) => {
    console.log('request /calculate-----');
    const {currentVal} = JSON.parse(ctx.request.body);
    console.log(typeof currentVal);
    console.log(currentVal);
    sleep(1000);
    if ((toggleSuccess & 1) === 0) {
        ctx.body = {
            errno: 0,
            errmsg: '',
            data: {
                valueFromServer: currentVal + 1
            }
        };
    } else {
        ctx.body = {
            errno: 1,
            errmsg: 'server error',
            data: {

            }
        };
    }
    toggleSuccess++
});



app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090, 'localhost');
