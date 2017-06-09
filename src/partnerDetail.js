import React from 'react';
import environment from './createRelayEnvironment';

import {
  graphql,
  QueryRenderer
} from 'react-relay';

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
                partners(partnerNumber: $partnerNumber) {
                  partnerNumber
                  firstname
                  lastname
                  birthday
                  sex
                }
              }
            `}

      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          console.log(props.partners[0]);
          return <div>
            {props.partners[0].firstname} {props.partners[0].lastname} {props.partners[0].birthday}
          </div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerDetail;
