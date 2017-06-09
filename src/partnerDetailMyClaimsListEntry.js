import React from "react";

import {createFragmentContainer, graphql} from "react-relay";

import currencyFormatter from 'currency-formatter';

const PartnerDetailMyClaimsListEntry = createFragmentContainer(
    ({data}) => (
        <tr>
            <td>{data.claimsNumber}</td>
            <td>{data.description}</td>
            <td>{currencyFormatter.format(data.claimsSum, { code: 'CHF' })}</td>
            <td>{data.claimsDate}</td>
            <td>{data.state}</td>
        </tr>
    ),
    graphql`
                fragment partnerDetailMyClaimsListEntry on 
                        Claims {
                            claimsNumber
                            description
                            claimsSum
                            claimsDate
                            state
                        }
                
            `
)

export default PartnerDetailMyClaimsListEntry;
