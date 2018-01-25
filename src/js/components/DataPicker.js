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
    const CURRENCIES = ["bitcoin", "ethereum", "ripple", "bitcoin-cash",
                        "cardano", "litecoin", "dash", "bitcoin-gold", "lisk", "verge"];

    fetch(URL)
      .then(response => response.json())
      .then(response => {
        let result = [];

        for (let i = 0; i < response.length; i++) {
          if (CURRENCIES.includes(response[i].id)) {
            result.push(response[i]);
          }
        }

        this.setState({data: result});
      });
  }

  componentDidMount() {
    let picker = setInterval(this.fetchData.bind(this), 10000);
  }

  render() {
    let cards = this.state.data.map(c => <CurrencyCard curr={c} key={c.id} />);

    return (
      <section className="cards-section">
        {cards}
      </section>
    )
  }
}

export default DataPicker;
