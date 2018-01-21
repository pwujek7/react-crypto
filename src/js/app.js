import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import DataPicker from './components/DataPicker.js';
import Footer from './components/Footer.js';

import './../sass/style.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <DataPicker />
        <Footer />
      </React.Fragment>
    )
  }
}

const ROOT = document.getElementById("root");
ReactDOM.render(<App />, ROOT);
