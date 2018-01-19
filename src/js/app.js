import React from 'react';
import ReactDOM from 'react-dom';

import DataPicker from './components/DataPicker.js';

import './../sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <DataPicker />
    )
  }
}

const ROOT = document.getElementById("root");
ReactDOM.render(<App />, ROOT);
