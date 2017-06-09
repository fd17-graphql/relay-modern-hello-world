import React from 'react';
import dateFormat from 'dateformat';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';


const PartnerListEntry = createFragmentContainer(
    ({ data }) => (
       <div>
           {data.firstname} {data.lastname} {data.myClaims.map(claim => claim.claimsSum).reduce(function(a, b) { return a + b}, 0)}
       </div>
    ),
    graphql`
    fragment partnerListEntry on Partner {
            partnerNumber
            firstname
            lastname
            myClaims {
              claimsSum
            }
    }
  `
)

export default PartnerListEntry;
