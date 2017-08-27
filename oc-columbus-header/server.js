export const data = (context, callback) => {
  const model = {
    logo: {
      href: '',
      url: context.params.logoUrl,
      alt: `${context.params.title} logo`,
    },
    title: context.params.title,
    timezoneOffset: '?'
  };

  if (context.plugins.getTimezoneOffset) {
    model.timezoneOffset = context.plugins.getTimezoneOffset();
  }

  if (context.plugins.getGeoIp) {
    return context.plugins.getGeoIp(context)
      .then((geoIp) => {
        model.geoIp = geoIp;
        return callback(null, model);
      });
  }
  return callback(null, model);
};
