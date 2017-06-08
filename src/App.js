import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';
import PartnerList from './partnerList';
import PartnerDetail from './partnerDetail';

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0
    }
  }

  setPartner(index) {
    this.setState({
      index
    })

  }
  render() {
    return (
      <div className="App">
        <h2>FocusDays GraphQL Demo</h2>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppQuery{
              partners {
                ...partnerList
                ...partnerDetail
               }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props.partners);
              return <div>
                <PartnerList data={props.partners} onClick={this.setPartner.bind(this)} />
                { (props.partners) ?
                  <div><h3>Partner Detail</h3>
                    <PartnerDetail data={props.partners[this.state.index]} /></div> : <div></div>}
              </div>;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    ); // render
  }
}

export default App;
