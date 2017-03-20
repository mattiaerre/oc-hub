const React = require('react');
const { renderToString } = require('react-dom/server');
const { styleSheet } = require('styled-components');

const App = require('./src/App').default;
const runs = require('./package.json').runs;

export const data = (context, callback) => {
  const run = runs[context.params.id];
  const model = {
    twitterUsername: 'mattiaerre',
    when: new Date(...run['date-time']),
    where: {
      googleMapsShortUrl: run['google-maps-short-url']
    },
    note: run.note
  };
  const props = { model };
  const app = renderToString(<App {...props} />);
  const css = styleSheet.getCSS();
  callback(null, {
    app,
    model,
    css,
    staticPath: context.staticPath
  });
};
