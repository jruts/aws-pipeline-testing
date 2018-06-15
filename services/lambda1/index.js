const handler = (event, context) => ({
  statusCode: 200,
  body: 'Lambda one is ready for liftoff!',
});

module.exports.handler = handler;
