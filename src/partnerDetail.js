import React from 'react';
import dateFormat from 'dateformat';
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
                partner(partnerNumber: $partnerNumber) {
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
          console.log(props.partner);
          return <div>
            {props.partner.firstname} {props.partner.lastname} {dateFormat(props.partner.birthday, "dd.mm.yyyy")}
          </div>;
        }
        return <div>Loading</div>;
      }}
    />
  }
}

export default PartnerDetail;
