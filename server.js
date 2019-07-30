import app from './app';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema';
import debug from 'debug';
const server = debug('server');

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
  .listen(4000)
  .on('err', err => {
    server('server error', err);
  });
