import React from 'react';

class CurrencyCard extends React.Component {
  render() {
    let {id, name, symbol, price_usd, percent_change_1h, percent_change_24h} = this.props.curr;

    return (
      <div>
        <p>{name}</p>
        <p>{symbol}</p>
        <p>{price_usd} $</p>
        <p>Last 1h: {percent_change_1h}%</p>
        <p>Last 24h: {percent_change_24h}%</p>
        <hr/>
      </div>
    )
  }
}

export default CurrencyCard;
