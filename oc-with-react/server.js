import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';

module.exports.data = (context, callback) => {
  const app = renderToString(<App />);
  callback(null, {
    app,
    staticPath: context.staticPath
  });
};
