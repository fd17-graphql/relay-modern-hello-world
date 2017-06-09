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
            </tr>
            </thead>
            <tbody>
            {data.myClaims.map(entry => (

                     <PartnerDetailMyClaimsListEntry data={entry} key={entry.claimsNumber}/>
                ))}
            </tbody>
        </table>
        </div>
      </div>
    ),
    graphql`
                fragment partnerDetailMyClaimsList on Partner {
                        partnerNumber
                        myClaims {
                            claimsNumber
                            ...partnerDetailMyClaimsListEntry 
                        }
                }
            `
)


export default PartnerDetailMyClaimsList;
