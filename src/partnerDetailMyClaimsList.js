import React from "react";

import {createFragmentContainer, graphql} from "react-relay";
import PartnerDetailMyClaimsListEntry from "./partnerDetailMyClaimsListEntry";


const PartnerDetailMyClaimsList = createFragmentContainer(
    ({data, title, onClick}) => (
        <div className="row">
            {(data.length > 0) ?
                <div>
                    <h5>{title}</h5>
                    <div className="col-xs-12‚">
                        <table className="table table-striped">
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
                                <PartnerDetailMyClaimsListEntry
                                    data={entry}
                                    key={entry.claimsNumber}
                                    onClick={onClick}
                                />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div> : ''
            }
        </div>

    ),
    graphql`
                fragment partnerDetailMyClaimsList on Claims @relay(plural: true){
                            claimsNumber
                            ...partnerDetailMyClaimsListEntry 
                }
            `
)


export default PartnerDetailMyClaimsList;
