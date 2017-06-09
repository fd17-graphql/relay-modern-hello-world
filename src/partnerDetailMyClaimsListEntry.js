import React from "react";

import {createFragmentContainer, graphql} from "react-relay";

const PartnerDetailMyClaimsListEntry = createFragmentContainer(
    ({data}) => (
        <tr>
            <td>{data.claimsNumber}</td>
            <td>{data.description}</td>
            <td>{data.claimsSum}</td>
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
