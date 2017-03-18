import React from 'react';
import InputBoxDoneTyping from 'react-input-box-done-typing';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneTypingValue: ''
    };

    this.doneTyping = this.doneTyping.bind(this);
  }

  doneTyping(value) {
    this.setState({ doneTypingValue: value });
  }

  render() {
    return (
      <div>
        <h1>OpenComponent w/ React</h1>
        <InputBoxDoneTyping
          id="input-box-done-typing"
          className="form-control"
          placeholder="Start typing ..."
          defaultValue={this.state.doneTypingValue}
          autoComplete="on"
          onChange={(value) => { console.log('onChange:', value); }} // eslint-disable-line no-console
          doneTyping={this.doneTyping}
          doneTypingInterval={1000}
        />
        <p>{this.state.doneTypingValue}</p>
      </div>
    );
  }
}

export default App;
