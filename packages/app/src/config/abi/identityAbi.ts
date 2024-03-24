export const identityAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'validAt',
        type: 'uint256',
      },
    ],
    name: 'calcDuoDate',
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
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'year',
        type: 'uint256',
      },
    ],
    name: 'calculateRegistrationFee',
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
        name: 'name',
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
      {
        internalType: 'address',
        name: 'resolver',
        type: 'address',
      },
    ],
    name: 'createIdentity',
    outputs: [],
    stateMutability: 'payable',
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
          {
            internalType: 'address',
            name: 'resolver',
            type: 'address',
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
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'removeInvalidChacters',
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
    ],
    name: 'renew',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
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
    name: 'setData',
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
      {
        internalType: 'address',
        name: 'resolver',
        type: 'address',
      },
    ],
    name: 'setResolver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
