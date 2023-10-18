const callApp = require('../../test-helpers/call-app');

describe('healthcheck', () => {
  it('returns success true', async () => {
    const response = await callApp({ url: '/healthcheck' });
    expect(response.data).toStrictEqual({ success: true });
  });
});
