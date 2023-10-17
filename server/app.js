const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const cors = require("@koa/cors");

const createApp = () => {
  const app = new Koa();
  app.use(cors({ origin: '*' }));
  app.use(bodyparser({
    onerror: (error, context) => {
      context.throw(400, 'request body not parsable as JSON');
    }
  }));

  return app;
};

module.exports = createApp();
