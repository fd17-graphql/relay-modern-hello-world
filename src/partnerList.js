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
          return <div className="row">
              <div className="col-xs-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Claims Sum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.partners.map((partner, index) => (
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
