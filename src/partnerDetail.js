import React from 'react';
import environment from './createRelayEnvironment';

import {
  graphql,
  QueryRenderer
} from 'react-relay';

import PartnerDetailMyClaimsList from './partnerDetailMyClaimsList'

class PartnerDetail extends React.Component {
  render() {
    console.log("partnerNumber", this.props.partnerNumber);
    if(this.props.partnerNumber == null){
      return <div></div>
    }
    return <QueryRenderer
      environment={environment}
      variables={{partnerNumber: this.props.partnerNumber}}
      query={graphql`
              query partnerDetailQuery($partnerNumber: Int!){
                partner(partnerNumber: $partnerNumber) {
                  partnerNumber
                  firstname
                  lastname
                  birthday
                  sex
                  ...partnerDetailMyClaimsList
                }
              }
            `}

      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <div>
            {props.partner.firstname} {props.partner.lastname} {props.partner.birthday}
            <PartnerDetailMyClaimsList data={props.partner}/>
          </div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerDetail;
