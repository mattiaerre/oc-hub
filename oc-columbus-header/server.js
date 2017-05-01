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

  callback(null, model);
};
