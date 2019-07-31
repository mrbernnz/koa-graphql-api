import Koa from 'koa';
import cors from '@koa/cors';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql/schema';
import initDB from './database';
import debug from 'debug';

const koaDebug = debug('koa:application');
const app = new Koa();

initDB();

app
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  })
  .use(cors())
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

export default app;
