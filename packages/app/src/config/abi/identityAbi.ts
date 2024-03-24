export const identityAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'validAt',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'nft',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ipfs',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'github',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'twitter',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'warpcaster',
        type: 'string',
      },
    ],
    name: 'createIdentity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'getIdentity',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'validAt',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'nft',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'ipfs',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'github',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'twitter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'warpcaster',
            type: 'string',
          },
        ],
        internalType: 'struct IdentityStruct',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
