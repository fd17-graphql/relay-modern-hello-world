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
              <h2>PartnerDetails</h2>
              <h3>Stammdaten</h3>
                Vorname: {props.partner.firstname} <br/>
                Nachname: {props.partner.lastname}<br/>
                Geburtsdatum: {props.partner.birthday}<br/>
              <h3>Schadensliste</h3>
              <PartnerDetailMyClaimsList data={props.partner.myClaims}/>

              <h3>Meine Schadensliste</h3>
              <PartnerDetailMyClaimsList data={props.partner.claimsCausedByMe}/>
          </div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerDetail;
