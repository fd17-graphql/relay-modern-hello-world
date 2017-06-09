import React, { Component } from 'react';

import PartnerList from './partnerList';
import PartnerDetail from './partnerDetail';
import NameForm from './NameForm';

import {BrowserRouter, Route, Link} from "react-router-dom";

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

  render(match) {
      if (typeof this.props.match != 'undefined' && typeof this.props.match.params != 'undefined'){
          console.log("match", this.props.match.params.id);
          this.state.partnerNumber = this.props.match.params.id;
      }
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
