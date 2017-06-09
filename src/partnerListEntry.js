import React from 'react';
import currencyFormatter from 'currency-formatter';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';
import {Link} from "react-router-dom";

const PartnerListEntry = createFragmentContainer(
    ({ data, selectedPartnerNumber, onClick }) => (
      <tr className={data.partnerNumber === selectedPartnerNumber ? 'selected' : ''}
          onClick={() => {onClick(data.partnerNumber)}}>
          <td><Link to={"/" + data.partnerNumber}>  {data.firstname} </Link></td>
        <td><Link to={"/" + data.partnerNumber}>{data.lastname}</Link></td>
        <td>{data.birthday}</td>
        <td>{currencyFormatter.format(data.myClaims.map(claim => claim.claimsSum).reduce(function(a, b) { return a + b}, 0), { code: 'CHF' })}</td>
      </tr>
    ),
    graphql`
    fragment partnerListEntry on Partner {
            partnerNumber
            firstname
            lastname
            birthday
            myClaims {
              claimsSum
            }
    }
  `
)

export default PartnerListEntry;
