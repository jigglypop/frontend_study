const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');
const app = new Koa();
const router = new Router();


router.get('/',ctx=>{
    ctx.body = "<h1>홈</h1>"
});
router.get('/about/:name',ctx=>{
    const {name} = ctx.params
    ctx.body = `<h1>소개 : ${name}</h1>`
});
router.get('/posts',ctx =>{
    const {id} = ctx.query
    ctx.body = id ? `<h1>${id}</h1>`:'id가 존재하지 않습니다.'
});

router.use('/api',api.routes());


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("start");
});