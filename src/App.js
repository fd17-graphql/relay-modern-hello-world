import React, { Component } from 'react';

import PartnerList from './partnerList';
import PartnerDetail from './partnerDetail';
import NameForm from './NameForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      partnerNumber: null ,
        claimGreaterThan: 1
    }
  }

  setPartner(partnerNumber) {
        console.log("setState", partnerNumber);
        this.setState({
            partnerNumber
        })
    }
    setClaimGreaterThan(claimGreaterThan) {
        this.setState({
            claimGreaterThan
        })
    }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <h4>List of Partners</h4>
        </div>
        <div className="row">
          <NameForm setClaims={this.setClaimGreaterThan.bind(this)} />
        </div>
        <PartnerList onClick={this.setPartner.bind(this)} claims={this.state.claimGreaterThan} selectedPartnerNumber={this.state.partnerNumber} />
        <PartnerDetail partnerNumber={this.state.partnerNumber} onClick={this.setPartner.bind(this)}  />
      </div>
    ); // render
  }
}

export default App;
