import React from 'react';
import { render } from 'react-dom';
import InputBoxDoneTyping from 'react-input-box-done-typing';

const App = () => (
  <div>
    <InputBoxDoneTyping
      id="input-box-done-typing"
      className="form-control"
      placeholder="Start typing ..."
      defaultValue="lon"
      autoComplete="on"
      onChange={(value) => { console.log('onChange:', value); }}
      doneTyping={(value) => { console.log('doneTyping:', value); }}
      doneTypingInterval={2000}
    />
  </div>
);

render(
  <App />, document.getElementById('app')
);
