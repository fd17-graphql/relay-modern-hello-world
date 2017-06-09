import React from 'react';
import currencyFormatter from 'currency-formatter';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';


const PartnerListEntry = createFragmentContainer(
    ({ data, selectedPartnerNumber, onClick }) => (
      <tr className={data.partnerNumber === selectedPartnerNumber ? 'selected' : ''}
          onClick={() => {onClick(data.partnerNumber)}}>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{currencyFormatter.format(data.myClaims.map(claim => claim.claimsSum).reduce(function(a, b) { return a + b}, 0), { code: 'CHF' })}</td>
      </tr>
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
