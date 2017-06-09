/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule partnerListEntry.graphql
 * @generated SignedSource<<407dabcffecfb9d8ab19c5bd3e963190>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type partnerListEntry = {|
  +partnerNumber: ?number;
  +firstname: string;
  +lastname: string;
  +myClaims: ?$ReadOnlyArray<?{|
    +claimsSum: number;
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "partnerListEntry",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "partnerNumber",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "firstname",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "lastname",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Claims",
      "name": "myClaims",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "claimsSum",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Partner"
};

module.exports = fragment;
