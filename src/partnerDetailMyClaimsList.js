import React from "react";

import {createFragmentContainer, graphql} from "react-relay";
import PartnerDetailMyClaimsListEntry from './partnerDetailMyClaimsListEntry'


/**
 *
 */
const PartnerDetailMyClaimsList = createFragmentContainer(
    ({data}) => (
      <div className="row">
        <div className="col-xs-12">
          <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>Sum</th>
                <th>Date</th>
                <th>State</th>
                <th>Verursacher</th>
            </tr>
            </thead>
            <tbody>
            {data.map(entry => (
                     <PartnerDetailMyClaimsListEntry data={entry} key={entry.claimsNumber}/>
                ))}
            </tbody>
        </table>
        </div>
      </div>
    ),
    graphql`
                fragment partnerDetailMyClaimsList on Claims @relay(plural: true){
                            claimsNumber
                            ...partnerDetailMyClaimsListEntry 
                }
            `
)


export default PartnerDetailMyClaimsList;
