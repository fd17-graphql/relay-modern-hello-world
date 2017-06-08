import React from 'react';
import dateFormat from 'dateformat';

import {
    graphql,
    createFragmentContainer
} from 'react-relay';

const PartnerDetail = createFragmentContainer(
  ({ data }) => {
    return(
    <div>
      {data.firstname} {data.lastname} {dateFormat(data.birthday, "dd.mm.yyyy")}
    </div>
  )},
  graphql`
    fragment partnerDetail on Partner{
            partnerNumber
            firstname
            lastname
            birthday
    }
  `
)

export default PartnerDetail;
