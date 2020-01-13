const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }

  await next();
  console.log('end');
});
app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log('end2');
});
app.use(ctx => {
  ctx.body = '<h1>hello world</h1>';
});
app.listen(4000, () => {
  console.log('start');
});
