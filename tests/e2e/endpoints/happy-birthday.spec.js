const callApp = require('../../test-helpers/call-app');
const jwt = require('jsonwebtoken');
const config = require('../../../server/config');

describe('happy birthday', () => {
  describe('authentication', () => {
    it('called without JWT token, returns 401', async () => {
      const response = await callApp({ url: '/birthday' });
      expect(response.status).toBe(401);
    });

    it('called with valid JWT token, returns 200', async () => {
      const token = jwt.sign({ }, config.jwt.secret);
      const response = await callApp({
        url: '/birthday',
        headers: {
          Authorization: `Bearer ${token}` }
      });
      expect(response.status).toBe(200);
    });

    it('called with wrong JWT token, returns 401', async () => {
      const token = jwt.sign({ }, 'wrong-secret');
      const response = await callApp({
        url: '/birthday',
        headers: {
          Authorization: `Bearer ${token}` }
      });

      expect(response.status).toBe(401);
    });
  });

  it('should return happy birthday', async () => {
    const token = jwt.sign({ }, 'secret');
    const response = await callApp({
      url: '/birthday',
      headers: {
        Authorization: `Bearer ${token}` }
    });
    expect(response.data).toStrictEqual({ happy: 'birthday' });
  });
});
