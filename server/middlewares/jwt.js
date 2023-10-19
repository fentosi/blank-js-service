const jwt = require('jsonwebtoken');
const config = require('../config');

const getTokenFromAuthHeader = context => {
  return context.headers.authorization.replace(/^Bearer\s/, '');
};

const jwtMiddleware = async (context, next) => {
  try {
    const token = getTokenFromAuthHeader(context);
    jwt.verify(token, config.jwt.secret);
    await next();
  } catch (e) {
    context.status = 401;
    context.body = { reason: 'Unauthorized' };
  }
}

module.exports = jwtMiddleware;
