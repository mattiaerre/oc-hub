const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');

const App = require('./src/App').default;
const runs = require('./package.json').runs;

const makeWhen = (dateTime) => {
  if (typeof dateTime === 'object') {
    return new Date(...dateTime);
  }
  return new Date(dateTime);
};

export const data = (context, callback) => {
  const run = runs[context.params.id];
  const model = {
    twitterUsername: 'mattiaerre',
    when: makeWhen(run['date-time']),
    where: {
      googleMapsShortUrl: run['google-maps-short-url']
    },
    note: run.note
  };
  const props = { model };
  const app = renderToString(<App {...props} />);
  const sheet = new ServerStyleSheet();
  const css = sheet.getStyleTags();
  callback(null, {
    app,
    model,
    css,
    staticPath: context.staticPath
  });
};
