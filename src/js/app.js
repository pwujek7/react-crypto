import React from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <div />
    )
  }
}

const ROOT = document.getElementById("root");
ReactDOM.render(<App />, ROOT);
