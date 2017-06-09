import React, { Component } from 'react';

import {
  graphql
} from 'react-relay';

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
      <div className="App">
        <h2>FocusDays GraphQL Demo</h2>
          <NameForm setClaims={this.setClaimGreaterThan.bind(this)} />
          <PartnerList onClick={this.setPartner.bind(this)} claims={this.state.claimGreaterThan}/>
          <PartnerDetail partnerNumber={this.state.partnerNumber} />
      </div>
    ); // render
  }
}

export default App;
