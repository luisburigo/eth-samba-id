// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public counter;
    address payable public owner;
    
    constructor() {
        counter = 0;
        owner = payable(msg.sender);
    }
    
    function getCounter() public view returns (uint256) {
        return counter;
    }

    function incrementCounter() public {
        counter++;
    }
}
