import React from 'react';

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
        console.log(response);
        this.setState({data: response});
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div />
    )
  }
}

export default DataPicker;
