import React from 'react';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';

import PartnerListEntry from './partnerListEntry';

const PartnerList = createFragmentContainer(
    ({ data, onClick}) => (
        <ol>
            {data.map( (partner, index) => (
                <li key={partner.partnerNumber} onClick={()=>{onClick(index)}}>
                    <PartnerListEntry data={partner} />
                </li>
            ))}
        </ol>
    ),
    graphql`
    fragment partnerList on Partner @relay(plural: true) {
        partnerNumber
        firstname
        ...partnerListEntry
    }
     
  `
)

export default PartnerList;
