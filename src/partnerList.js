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

      query={graphql`
              query partnerListQuery{
                partners {
                  partnerNumber
                  ...partnerListEntry
                 }
              }
            `}

      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <ol>
              {props.partners.map((partner, index) => (
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
