// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Contract {
    uint public value;

    function setValue(uint _value) public {
        value = _value;
    }
}
