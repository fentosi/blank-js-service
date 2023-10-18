const app = require('../../server/app');
const axios = require('axios');

const callApp = async ({ method = 'get', url, data = null }) => {
  const service = app.listen();
  const address = service.address();
  const response = await axios.request({
    method,
    url: `http://localhost:${address.port}${url}`,
    data
  });
  service.close();
  return response;
}

module.exports = callApp;
