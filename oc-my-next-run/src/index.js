import React from 'react';
import { render } from 'react-dom';
import App from './App';

const props = { model: window.model };

render(
  <App {...props} />, document.getElementById('app')
);
