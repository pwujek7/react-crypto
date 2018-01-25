import React from 'react';

class CurrencyCard extends React.Component {

  render() {
    let {id, name, symbol, price_usd, percent_change_1h, percent_change_24h} = this.props.curr;

    return (
      <div className="card">
        <div className="card__row">
          <p className="card__txt">{name} | {symbol}</p>
          <p className="card__txt card__txt--number">{price_usd} $</p>
        </div>
        <div className="card__row card__row--between">
          <p className="card__txt card__txt--percent"> Last 1h:
            { percent_change_1h > 0 ? (
              <span className="card__txt card__txt--number card__txt--green"> {percent_change_1h}%</span>
            ) : (
              <span className="card__txt card__txt--number card__txt--red"> {percent_change_1h}%</span>
            )}
          </p>
          <p className="card__txt card__txt--percent"> Last 24h:
            { percent_change_24h > 0 ? (
              <span className="card__txt card__txt--number card__txt--green"> {percent_change_24h}%</span>
            ) : (
              <span className="card__txt card__txt--number card__txt--red"> {percent_change_24h}%</span>
            )}
          </p>
        </div>
      </div>
    )
  }
}

export default CurrencyCard;
