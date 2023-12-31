const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Router = require('koa-router');
const healthcheck = require('./endpoints/healthcheck');
const happyBirthday = require('./endpoints/happy-birthday');
const jwtMiddleware = require('./middlewares/jwt');

const createApp = () => {
  const app = new Koa();
  app.use(cors({ origin: '*' }));
  app.use(bodyparser({
    onerror: (error, context) => {
      context.throw(400, 'request body not parsable as JSON');
    }
  }));

  const unauthenticatedRouter = new Router();
  unauthenticatedRouter.get('/healthcheck', healthcheck);
  app.use(unauthenticatedRouter.middleware());

  const jwtAuthenticatedRouter = new Router();
  jwtAuthenticatedRouter.use(jwtMiddleware);
  jwtAuthenticatedRouter.get('/birthday', happyBirthday)
  app.use(jwtAuthenticatedRouter.middleware());

  return app;
};

module.exports = createApp();
