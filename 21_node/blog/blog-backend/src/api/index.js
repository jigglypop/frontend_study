const Router = require('koa-router');
const api = new Router();
const posts = require('./posts');

api.get('/test',ctx=>{
    ctx.body = "<h1>test 성공</h1>"
});
api.get('/test2',ctx=>{
    ctx.body = "<h1>test2 성공</h1>"
});
api.use('/posts',posts.routes());

module.exports = api



