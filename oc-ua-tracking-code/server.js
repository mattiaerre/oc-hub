export const data = (context, callback) => {
  callback(null, { trackingId: context.params.trackingId });
};
