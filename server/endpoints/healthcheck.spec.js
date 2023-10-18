const healthcheck = require('./healthcheck');

describe('healthcheck', () => {
  it('context body is success true', () => {
    const context = {}
    healthcheck(context);
    expect(context.body).toStrictEqual({ success: true });
  });
});
