/* eslint-disable func-names, no-var */
module.exports.data = function (context, callback) {
  var model = { baseUrl: context.baseUrl, staticPath: context.staticPath, params: context.params };
  callback(null, model);
};
