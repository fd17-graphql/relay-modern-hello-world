import React from 'react';
import environment from './createRelayEnvironment';
import {
  graphql,
  QueryRenderer
} from 'react-relay';

import PartnerListEntry from './partnerListEntry';

class PartnerList extends React.Component {
  render() {
      console.log("claims", this.props.claims);

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
            console.log ("props", props.partnerWithClaimGreaterThan);
          return <ol>
              {props.partnerWithClaimGreaterThan.map((partner, index) => (
                <li key={partner.partnerNumber} onClick={() => {
                  this.props.onClick(partner.partnerNumber)
                }}>
                  <PartnerListEntry data={partner}/>
                </li>
              ))}
            </ol>
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerList;
