import React, { Component } from 'react';

import {
  graphql
} from 'react-relay';

import PartnerList from './partnerList';
import PartnerDetail from './partnerDetail';

class App extends Component {
  constructor() {
    super();

    this.state = {
      partnerNumber: null
    }
  }

  setPartner(partnerNumber) {
    console.log("setState", partnerNumber);
    this.setState({
      partnerNumber
    })

  }
  render() {
    return (
      <div className="App">
        <h2>FocusDays GraphQL Demo</h2>
          <PartnerList onClick={this.setPartner.bind(this)} />
          <PartnerDetail partnerNumber={this.state.partnerNumber} />
      </div>
    ); // render
  }
}

export default App;
