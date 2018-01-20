import React from 'react';

import CurrencyCard from './CurrencyCard.js';

class DataPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  fetchData() {
    const URL = "https://api.coinmarketcap.com/v1/ticker/";

    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({data: response});
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let cards = this.state.data.map(c => <CurrencyCard curr={c} key={c.id} />);

    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default DataPicker;
