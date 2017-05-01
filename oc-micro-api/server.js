export const data = (context, callback) => {
  if (context.params.render === 'api') {
    callback(null, {
      message: 'Hello OC μ-API!'
    });
  } else {
    callback(null, {
      baseUrl: context.baseUrl,
      staticPath: context.staticPath
    });
  }
};
