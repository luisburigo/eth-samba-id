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
    address resolver;
}

contract Identity {
    address payable public owner;
    uint private YEAR_SECOUNDS = 31536000;
    mapping(string => IdentityStruct) private identities;

    constructor() {
        owner = payable(msg.sender);
    }

    function createIdentity(
        uint validAt, 
        string memory nft,
        string memory name, 
        string memory ipfs, 
        string memory github, 
        string memory twitter, 
        string memory warpcaster,
        address resolver
    ) public payable {

        //valida balance
        uint fee = calculateRegistrationFee(name, validAt);
        require(msg.value <= fee, "Insufficient funds");

        //valida se o nome já existe
        require(
            bytes(identities[name].name).length == 0,
            "Name already registered"
        );

        //valida se o nome tem ao menos 3 caracteres
        require(
            bytes(name).length >= 3,
            "Name must have at least 3 characters"
        );



        //criar identity
        identities[name] = IdentityStruct(
            removeInvalidChacters(name), 
            calcDuoDate(validAt), 
            msg.sender, 
            nft, 
            ipfs, 
            github, 
            twitter, 
            warpcaster,
            resolver
        );

        // Pagar o owner
        owner.transfer(msg.value);
    }
    
    function getIdentity(string memory name) public view returns (IdentityStruct memory) {
        return identities[name];
    }


    function setResolver(string memory name, address resolver) public {
        IdentityStruct storage identity = identities[name];
        require(
            msg.sender == identity.owner,
            "You are not the owner of this identity"
        );
        
        identity.resolver = resolver;
    }



    //utils
    function calcDuoDate(uint validAt) public view returns (uint) {
        return block.timestamp*1000 + (YEAR_SECOUNDS*1000*validAt); // 1 ano em segundos
    }

    function calculateRegistrationFee(string memory name, uint year) public pure returns (uint) {
        uint nameLength = bytes(name).length;
        // Lógica de preço dinâmico baseada no tamanho do nome
        if (nameLength >= 5) {
            return (0.001 ether)*year;
        } else if (nameLength == 4) {
            return (0.005 ether)*year;
        } else {
            return (0.01 ether)*year;
        }
    }

    function removeInvalidChacters(string memory str) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(strBytes.length);
        uint index = 0;
        for (uint i = 0; i < strBytes.length; i++) {
            bytes1 char = strBytes[i];
            // Verifica se o caractere é uma letra (maiúscula ou minúscula), número ou underline "_"
            if ((char >= 0x41 && char <= 0x5A) || // Letras maiúsculas de A a Z
                (char >= 0x61 && char <= 0x7A) || // Letras minúsculas de a a z
                (char >= 0x30 && char <= 0x39) || // Números de 0 a 9
                (char == 0x5F)) { // Underline "_"
                result[index] = char;
                index++;
            }
        }
        bytes memory trimmedResult = new bytes(index);
        for (uint j = 0; j < index; j++) {
            trimmedResult[j] = result[j];
        }
        return string(trimmedResult);
    }


}

/*todo: 
    - Add logic to resolvers
        - Add resolver
        - Set resolver
        - Always verified by owner request
    - Add generation NFT on creation
    - Add reverse verify [address -> metadata]
    - Calculate price -> ok
    - Add validAt time -> ok
    - Add name string validations -> ok
    - Add renew identity
    - Add set datas
  */  
