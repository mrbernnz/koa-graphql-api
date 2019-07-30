import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql/schema';
import initDB from './database';
import debug from 'debug';

const koaDebug = debug('koa:application');
const app = new Koa();

initDB();

app
  .use(
    mount(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    )
  )
  .listen(process.env.PORT || 3001)
  .on('err', err => {
    koaDebug('app error', err);
  });

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
