const React = require('react');
const { renderToString } = require('react-dom/server');

const App = require('./src/App').default;
const runs = require('./package.json').runs;

const getNextRun = () => {
  let run;
  Object.keys(runs).sort().forEach((key, index, data) => {
    // take the last element
    if (index === (data.length - 1)) { run = runs[key]; }
  });
  return run;
};

export const data = (context, callback) => {
  const run = getNextRun();
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
  callback(null, {
    app,
    model,
    staticPath: context.staticPath
  });
};
