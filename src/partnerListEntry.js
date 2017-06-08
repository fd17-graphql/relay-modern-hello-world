import React from 'react';
import dateFormat from 'dateformat';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';


const PartnerListEntry = createFragmentContainer(
    ({ data }) => (
       <div>
           {data.firstname} {data.lastname}
       </div>
    ),
    graphql`
    fragment partnerListEntry on Partner {
            partnerNumber
            firstname
            lastname
    }
  `
)

export default PartnerListEntry;
