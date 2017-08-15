import * as koaRouter from 'koa-router';
import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';

import schema from './schema';

export default function router(): koaRouter {
  const router = new koaRouter();

  router.post('/graphql', graphqlKoa({ schema }));
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

  return router;
}
