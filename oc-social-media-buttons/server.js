const React = require('react');
const { renderToString } = require('react-dom/server');
const { styleSheet } = require('styled-components');
const App = require('./src/App').default;

export const data = (context, callback) => {
  const app = renderToString(<App />);
  const css = styleSheet.getCSS();
  callback(null, { app, css });
};
