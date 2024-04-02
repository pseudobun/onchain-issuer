export const balanceIssuerAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CREDENTIAL_ADAPTER_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'claimIndexHash',
        type: 'uint256',
      },
    ],
    name: 'getClaimProof',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'claimIndexHash',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'root',
        type: 'uint256',
      },
    ],
    name: 'getClaimProofByRoot',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'claimIndexHash',
        type: 'uint256',
      },
    ],
    name: 'getClaimProofWithStateInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'state',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'revocationsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rootsRoot',
            type: 'uint256',
          },
        ],
        internalType: 'struct IdentityLib.StateInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getClaimsTreeRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_userId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_credentialId',
        type: 'uint256',
      },
    ],
    name: 'getCredential',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'string[]',
            name: 'context',
            type: 'string[]',
          },
          {
            internalType: 'string',
            name: '_type',
            type: 'string',
          },
          {
            internalType: 'uint64',
            name: 'issuanceDate',
            type: 'uint64',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'id',
                type: 'string',
              },
              {
                internalType: 'string',
                name: '_type',
                type: 'string',
              },
            ],
            internalType: 'struct INonMerklizedIssuer.CredentialSchema',
            name: 'credentialSchema',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'id',
                type: 'string',
              },
              {
                internalType: 'string',
                name: '_type',
                type: 'string',
              },
            ],
            internalType: 'struct INonMerklizedIssuer.DisplayMethod',
            name: 'displayMethod',
            type: 'tuple',
          },
        ],
        internalType: 'struct INonMerklizedIssuer.CredentialData',
        name: '',
        type: 'tuple',
      },
      {
        internalType: 'uint256[8]',
        name: '',
        type: 'uint256[8]',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'key',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'rawValue',
            type: 'bytes',
          },
        ],
        internalType: 'struct INonMerklizedIssuer.SubjectField[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCredentialAdapterVersion',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getIsOldStateGenesis',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestPublishedClaimsRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestPublishedRevocationsRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestPublishedRootsRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestPublishedState',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'revocationNonce',
        type: 'uint64',
      },
    ],
    name: 'getRevocationProof',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'revocationNonce',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: 'root',
        type: 'uint256',
      },
    ],
    name: 'getRevocationProofByRoot',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'revocationNonce',
        type: 'uint64',
      },
    ],
    name: 'getRevocationProofWithStateInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'state',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'revocationsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rootsRoot',
            type: 'uint256',
          },
        ],
        internalType: 'struct IdentityLib.StateInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    name: 'getRevocationStatus',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'state',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'claimsTreeRoot',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'revocationTreeRoot',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'rootOfRoots',
                type: 'uint256',
              },
            ],
            internalType:
              'struct IOnchainCredentialStatusResolver.IdentityStateRoots',
            name: 'issuer',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'root',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'existence',
                type: 'bool',
              },
              {
                internalType: 'uint256[]',
                name: 'siblings',
                type: 'uint256[]',
              },
              {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'auxExistence',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'auxIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'auxValue',
                type: 'uint256',
              },
            ],
            internalType: 'struct IOnchainCredentialStatusResolver.Proof',
            name: 'mtp',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IOnchainCredentialStatusResolver.CredentialStatus',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'state',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'nonce',
        type: 'uint64',
      },
    ],
    name: 'getRevocationStatusByIdAndState',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'state',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'claimsTreeRoot',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'revocationTreeRoot',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'rootOfRoots',
                type: 'uint256',
              },
            ],
            internalType:
              'struct IOnchainCredentialStatusResolver.IdentityStateRoots',
            name: 'issuer',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'root',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'existence',
                type: 'bool',
              },
              {
                internalType: 'uint256[]',
                name: 'siblings',
                type: 'uint256[]',
              },
              {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'auxExistence',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'auxIndex',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'auxValue',
                type: 'uint256',
              },
            ],
            internalType: 'struct IOnchainCredentialStatusResolver.Proof',
            name: 'mtp',
            type: 'tuple',
          },
        ],
        internalType:
          'struct IOnchainCredentialStatusResolver.CredentialStatus',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRevocationsTreeRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'rootsTreeRoot',
        type: 'uint256',
      },
    ],
    name: 'getRootProof',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'claimsTreeRoot',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'root',
        type: 'uint256',
      },
    ],
    name: 'getRootProofByRoot',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'rootsTreeRoot',
        type: 'uint256',
      },
    ],
    name: 'getRootProofWithStateInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'root',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'existence',
            type: 'bool',
          },
          {
            internalType: 'uint256[]',
            name: 'siblings',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'auxExistence',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'auxIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auxValue',
            type: 'uint256',
          },
        ],
        internalType: 'struct SmtLib.Proof',
        name: '',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'state',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'revocationsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rootsRoot',
            type: 'uint256',
          },
        ],
        internalType: 'struct IdentityLib.StateInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'state',
        type: 'uint256',
      },
    ],
    name: 'getRootsByState',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'claimsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'revocationsRoot',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rootsRoot',
            type: 'uint256',
          },
        ],
        internalType: 'struct IdentityLib.Roots',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRootsTreeRoot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSmtDepth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_userId',
        type: 'uint256',
      },
    ],
    name: 'getUserCredentialIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stateContractAddr',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_userId',
        type: 'uint256',
      },
    ],
    name: 'issueCredential',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: '_revocationNonce',
        type: 'uint64',
      },
    ],
    name: 'revokeClaimAndTransit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
