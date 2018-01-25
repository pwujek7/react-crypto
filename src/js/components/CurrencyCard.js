import React from 'react';

class CurrencyCard extends React.Component {
  render() {
    let {id, name, symbol, price_usd, percent_change_1h, percent_change_24h} = this.props.curr;

    return (
      <div className="card">
        <div className="card__row">
          <p className="card__txt">{name} | {symbol}</p>
          <p className="card__txt card__txt--price">{price_usd} $</p>
        </div>
        <div className="card__row card__row--between">
          <p className="card__txt card__txt--percent">
            <span className="card__txt card__txt--small">Last 1h: </span>{percent_change_1h}%</p>
          <p className="card__txt card__txt--percent">
            <span className="card__txt card__txt--small">Last 24h: </span>{percent_change_24h}%</p>
        </div>
      </div>
    )
  }
}

export default CurrencyCard;
