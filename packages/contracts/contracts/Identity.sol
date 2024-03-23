// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct IdentityStruct {
    string name;
    uint validAt;
    address owner;
    string nft;
    string ipfs;
    string github;
    string twitter;
    string warpcaster;
}

contract Identity {
    address payable public owner;
    mapping(string => IdentityStruct) private identities;

    constructor() {
        owner = payable(msg.sender);
    }

    function createIdentity(string memory name, uint validAt, string memory nft, string memory ipfs, string memory github, string memory twitter, string memory warpcaster) public {
        identities[name] = IdentityStruct(name, validAt, msg.sender, nft, ipfs, github, twitter, warpcaster);
    }
    
    function getIdentity(string memory name) public view returns (IdentityStruct memory) {
        return identities[name];
    }
}

/*todo: 
    - Add validAt time (10 days)
    - Add name string validations
    - Add logic to resolvers
        - Add resolver
        - Set resolver
        - Always verified by owner request
    - Add generation NFT on creation
    - Add reverse verify [address -> metadata]
    - Calculate price
  */  
