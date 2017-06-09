import React, { Component } from 'react';

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
      <div className="App container">
        <h4>List of Partners</h4>
          <PartnerList onClick={this.setPartner.bind(this)} selectedPartnerNumber={this.state.partnerNumber} />
          <PartnerDetail partnerNumber={this.state.partnerNumber} />
      </div>
    ); // render
  }
}

export default App;
