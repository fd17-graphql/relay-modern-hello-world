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
                  myClaims {
                    ...partnerDetailMyClaimsList
                  }
                   claimsCausedByMe {
                    ...partnerDetailMyClaimsList
                  }
                }
              }
            `}

      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <div>
            <div className="row">
              <h4>{props.partner.firstname} {props.partner.lastname} ({props.partner.sex}, {props.partner.birthday})</h4>
            </div>
              <PartnerDetailMyClaimsList data={props.partner.myClaims} title="Schäden"/>
              <PartnerDetailMyClaimsList data={props.partner.claimsCausedByMe} title="Verursachte Schäden"/>
          </div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerDetail;
