/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule partnerDetailQuery.graphql
 * @generated SignedSource<<467f573441a22d75d2bb2278eaa5a949>>
 * @relayHash 0d515831ab51d00adc4ec0ad26e61080
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query partnerDetailQuery(
  $partnerNumber: Int!
) {
  partner(partnerNumber: $partnerNumber) {
    partnerNumber
    firstname
    lastname
    birthday
    sex
    myClaims {
      ...partnerDetailMyClaimsList
    }
    claimsCausedByMe {
      ...partnerDetailMyClaimsList
    }
  }
}

fragment partnerDetailMyClaimsList on Claims {
  claimsNumber
  ...partnerDetailMyClaimsListEntry
}

fragment partnerDetailMyClaimsListEntry on Claims {
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
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "partnerNumber",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "partnerDetailQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "partnerNumber",
            "variableName": "partnerNumber",
            "type": "Int!"
          }
        ],
        "concreteType": "Partner",
        "name": "partner",
        "plural": false,
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "birthday",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "sex",
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
                "kind": "FragmentSpread",
                "name": "partnerDetailMyClaimsList",
                "args": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Claims",
            "name": "claimsCausedByMe",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "partnerDetailMyClaimsList",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "partnerDetailQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "partnerNumber",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "partnerDetailQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "partnerNumber",
            "variableName": "partnerNumber",
            "type": "Int!"
          }
        ],
        "concreteType": "Partner",
        "name": "partner",
        "plural": false,
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "birthday",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "sex",
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
                "kind": "InlineFragment",
                "type": "Claims",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsNumber",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsSum",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsDate",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Partner",
                    "name": "causer",
                    "plural": false,
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
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Claims",
            "name": "claimsCausedByMe",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "Claims",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsNumber",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsSum",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "claimsDate",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Partner",
                    "name": "causer",
                    "plural": false,
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
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query partnerDetailQuery(\n  $partnerNumber: Int!\n) {\n  partner(partnerNumber: $partnerNumber) {\n    partnerNumber\n    firstname\n    lastname\n    birthday\n    sex\n    myClaims {\n      ...partnerDetailMyClaimsList\n    }\n    claimsCausedByMe {\n      ...partnerDetailMyClaimsList\n    }\n  }\n}\n\nfragment partnerDetailMyClaimsList on Claims {\n  claimsNumber\n  ...partnerDetailMyClaimsListEntry\n}\n\nfragment partnerDetailMyClaimsListEntry on Claims {\n  claimsNumber\n  description\n  claimsSum\n  claimsDate\n  state\n  causer {\n    partnerNumber\n    firstname\n    lastname\n  }\n}\n"
};

module.exports = batch;
