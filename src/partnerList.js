import React from 'react';
import environment from './createRelayEnvironment';
import {
  graphql,
  QueryRenderer
} from 'react-relay';

import PartnerListEntry from './partnerListEntry';

class PartnerList extends React.Component {
  render() {
    return <QueryRenderer
      environment={environment}
      variables={{claimGreaterThan: this.props.claims}}
      query={graphql`
              query partnerListQuery ($claimGreaterThan: Int!){
                partnerWithClaimGreaterThan (value: $claimGreaterThan) {
                  partnerNumber
                  ...partnerListEntry
                 }
              }
            `}

      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <div className="row">
              <div className="col-xs-12">
                <table className="table table-striped fixed">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Birtday</th>
                      <th>Claims Sum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.partnerWithClaimGreaterThan.map((partner, index) => (
                        <PartnerListEntry data={partner} key={partner.partnerNumber} selectedPartnerNumber={this.props.selectedPartnerNumber} onClick={this.props.onClick}/>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerList;
