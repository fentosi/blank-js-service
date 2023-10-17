const config = require('./config.js');
const app = require('./app.js');

main = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server listening http://127.0.0.1:${config.port}/`);
    });
  } catch (error) {
    process.exit(1);
  }
};

void main();
