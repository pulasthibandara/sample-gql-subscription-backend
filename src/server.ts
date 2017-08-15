import * as koa from 'koa';
import * as koaBody from 'koa-bodyparser';

import routes from './routes';

export default function run() {
  const app = new koa();
  const router = routes();

  app.use(koaBody());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(3000, () => { console.log('started graphql server!'); });
}
