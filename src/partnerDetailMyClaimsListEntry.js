import React from "react";
import {Link} from "react-router-dom";
import {createFragmentContainer, graphql} from "react-relay";

import currencyFormatter from 'currency-formatter';

const PartnerDetailMyClaimsListEntry = createFragmentContainer(
    ({data, onClick}) => (
        <tr>
            <td>{data.claimsNumber}</td>
            <td>{data.description}</td>
            <td>{currencyFormatter.format(data.claimsSum, { code: 'CHF' })}</td>
            <td>{data.claimsDate}</td>
            <td>{data.state}</td>
            <td onClick={() => onClick(data.causer.partnerNumber)}><Link to={"/" + data.causer.partnerNumber}> {data.causer.firstname} {data.causer.lastname} {data.causer.partnerNumber}</Link></td>
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
                            causer {
                                  partnerNumber
                                  firstname
                                  lastname
                            }
                        }
                
            `
)

export default PartnerDetailMyClaimsListEntry;
