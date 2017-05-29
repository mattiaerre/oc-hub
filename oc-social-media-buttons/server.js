const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const App = require('./src/App').default;

export const data = (context, callback) => {
  const app = renderToString(<App />);
  const sheet = new ServerStyleSheet();
  const css = sheet.getStyleTags();
  callback(null, { app, css });
};
