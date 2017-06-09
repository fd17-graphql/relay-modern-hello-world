import React from "react";

import {createFragmentContainer, graphql} from "react-relay";
import PartnerDetailMyClaimsListEntry from './partnerDetailMyClaimsListEntry'


/**
 *
 */
const PartnerDetailMyClaimsList = createFragmentContainer(
    ({data}) => (
        <table>
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
