// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EatToken is ERC20 {
    uint constant _initial_supply = 1_000_000 * (10 ** 18);

    constructor() ERC20("EatToken", "EAT") {
        _mint(msg.sender, _initial_supply);
    }
}
