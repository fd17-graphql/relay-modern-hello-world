import React from 'react';
import currencyFormatter from 'currency-formatter';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';


const PartnerListEntry = createFragmentContainer(
    ({ data }) => (
       <div>

           {data.firstname} {data.lastname} {currencyFormatter.format(data.myClaims.map(claim => claim.claimsSum).reduce(function(a, b) { return a + b}, 0), { code: 'CHF' })}
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
