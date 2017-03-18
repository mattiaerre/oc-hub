module.exports.data = (context, callback) => {
  callback(null, { staticPath: context.staticPath });
};
