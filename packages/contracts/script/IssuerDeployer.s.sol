// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../src/Issuer.sol";
import "forge-std/Script.sol";

contract IssuerDeployer is Script {

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        BalanceCredentialIssuer nft = new BalanceCredentialIssuer();

        vm.stopBroadcast();
    }

}
