import Koa from 'koa';
// import debug from 'debug';
// const koaDebug = debug('koa:application');
const app = new Koa();

/*
 * app.context.date = Date();
 * app.context.userData = {
 *   first: 'Noel',
 *   last: 'Sagaille'
 * };
 *
 * app
 *   .use(async (ctx, next) => {
 *     await next();
 *     const responseTime = ctx.response.get(`X-Response-Time`);
 *     koaDebug(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
 *   })
 *
 *   .use(async (ctx, next) => {
 *     const start = Date.now();
 *     await next();
 *     const milisecond = Date.now() - start;
 *     ctx.set(`X-Response-Time`, `${milisecond}ms`);
 *   })
 *
 *   .use(ctx => {
 *     let from = ctx.request.origin;
 *     koaDebug(from);
 *     ctx.response.body = ctx.userData;
 *   });
 */

export default app;
