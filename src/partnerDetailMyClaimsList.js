import React from "react";

import {createFragmentContainer, graphql} from "react-relay";
import PartnerDetailMyClaimsListEntry from './partnerDetailMyClaimsListEntry'


/**
 *
 */
const PartnerDetailMyClaimsList = createFragmentContainer(
    ({data}) => (
        console.log("data",data),
        <table>
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
    ),
    graphql`
                fragment partnerDetailMyClaimsList on Claims @relay(plural: true){
                            claimsNumber
                            ...partnerDetailMyClaimsListEntry 
                }
            `
)


export default PartnerDetailMyClaimsList;
