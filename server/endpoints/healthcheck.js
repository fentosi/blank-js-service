const healthcheck = async (context) => {
  context.body = { success: true };
}

module.exports = healthcheck;
