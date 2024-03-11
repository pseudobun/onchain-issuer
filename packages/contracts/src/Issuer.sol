// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {ClaimBuilder} from "@iden3/contracts/lib/ClaimBuilder.sol";
import {IdentityLib} from "@iden3/contracts/lib/IdentityLib.sol";
import {INonMerklizedIssuer} from "@iden3/contracts/interfaces/INonMerklizedIssuer.sol";
import {NonMerklizedIssuerBase} from "@iden3/contracts/lib/NonMerklizedIssuerBase.sol";
import {PrimitiveTypeUtils} from "@iden3/contracts/lib/PrimitiveTypeUtils.sol";
import {PoseidonUnit4L} from "@iden3/contracts/lib/Poseidon.sol";

/**
 * @dev Example of decentralized balance credential issuer.
 * This issuer issue non-merklized credentials decentralized.
 */
contract BalanceCredentialIssuer is NonMerklizedIssuerBase, OwnableUpgradeable {
    using IdentityLib for IdentityLib.Data;

    uint256 public constant MAX_CLAIMS = 1000;
    /// @custom:storage-location erc7201:balance.credential.issuer.storage

    struct Storage {
        // countOfIssuedClaims count of issued claims for incrementing id and revocation nonce for new claims
        uint64 countOfIssuedClaims;
        // claim store
        mapping(uint256 => uint256[]) userClaims;
        mapping(uint256 => ClaimItem) idToClaim;
        // this mapping is used to store credential subject fields
        // to escape additional copy in issueCredential function
        // since "Copying of type struct OnchainNonMerklizedIdentityBase.SubjectField memory[] memory to storage not yet supported."
        mapping(uint256 => INonMerklizedIssuer.SubjectField[]) idToCredentialSubject;
    }

    bytes32 private constant STORAGE_LOCATION = 0x019dfb46485f789e684dc5f54f13de3e6ef161b4d8709723f90193e84ea09c53;

    function getStorage() private pure returns (Storage storage $) {
        bytes32 location = STORAGE_LOCATION;
        assembly {
            $.slot := location
        }
    }

    /**
     * @dev Version of contract
     */
    string public constant VERSION = "1.0.0";

    // jsonldSchemaHash hash of jsonld schema.
    // More about schema: https://devs.polygonid.com/docs/issuer-node/issuer-node-api/claim/apis/#get-claims
    uint256 private constant jsonldSchemaHash = 148_834_697_620_350_657_501_993_499_321_116_864_501;
    string private constant jsonSchema =
        "https://gist.githubusercontent.com/ilya-korotya/e10cd79a8cc26ab6e40400a11838617e/raw/575edc33d485e2a4c806baad97e21117f3c90a9f/non-merklized-non-zero-balance.json";
    string private constant jsonldSchema =
        "https://gist.githubusercontent.com/ilya-korotya/660496c859f8d31a7d2a92ca5e970967/raw/6b5fc14fe630c17bfa52e05e08fdc8394c5ea0ce/non-merklized-non-zero-balance.jsonld";

    struct ClaimItem {
        uint256 id;
        uint64 issuanceDate;
        uint256[8] claim;
    }

    function initialize(address _stateContractAddr) public override initializer {
        super.initialize(_stateContractAddr);
        __Ownable_init();
    }

    /**
     * @dev Get user's id list of credentials
     * @param _userId - user id
     * @return array of credential ids
     */
    function getUserCredentialIds(uint256 _userId) external view returns (uint256[] memory) {
        Storage storage $ = getStorage();
        return $.userClaims[_userId];
    }

    /**
     * @dev Get credential by id
     * @param _userId - user id
     * @param _credentialId - credential id
     * @return credential data
     */
    function getCredential(uint256 _userId, uint256 _credentialId)
        external
        view
        override
        returns (
            INonMerklizedIssuer.CredentialData memory,
            uint256[8] memory,
            INonMerklizedIssuer.SubjectField[] memory
        )
    {
        Storage storage $ = getStorage();

        string[] memory jsonLDContextUrls = new string[](2);
        jsonLDContextUrls[0] = jsonldSchema;
        jsonLDContextUrls[1] = "https://schema.iden3.io/core/jsonld/displayMethod.jsonld";

        ClaimItem memory claimItem = $.idToClaim[_credentialId];
        INonMerklizedIssuer.CredentialData memory credentialData = INonMerklizedIssuer.CredentialData({
            id: claimItem.id,
            context: jsonLDContextUrls,
            _type: "Balance",
            issuanceDate: claimItem.issuanceDate,
            credentialSchema: INonMerklizedIssuer.CredentialSchema({id: jsonSchema, _type: "JsonSchema2023"}),
            displayMethod: INonMerklizedIssuer.DisplayMethod({
                id: "ipfs://QmS8eY8ZCiAAW8qgx3T6SQ3HDGeddwLZsjPXNAZExQwRY4",
                _type: "Iden3BasicDisplayMethodV1"
            })
        });
        return (credentialData, claimItem.claim, $.idToCredentialSubject[_credentialId]);
    }

    /**
     * @dev Revoke claim using it's revocationNonce
     * @param _revocationNonce  - revocation nonce
     */
    function revokeClaimAndTransit(uint64 _revocationNonce) public onlyOwner {
        identity.revokeClaim(_revocationNonce);
        identity.transitState();
    }

    /**
     * @dev Issue credential with user's balance
     * @param _userId - user id for which the claim is issued
     */
    function issueCredential(uint256 _userId) public {
        Storage storage $ = getStorage();

        uint64 expirationDate = convertTime(block.timestamp + 30 days);
        uint256 ownerAddress = PrimitiveTypeUtils.addressToUint256(msg.sender);
        uint256 ownerBalance = msg.sender.balance;

        ClaimBuilder.ClaimData memory claimData = ClaimBuilder.ClaimData({
            // metadata
            schemaHash: jsonldSchemaHash,
            idPosition: ClaimBuilder.ID_POSITION_INDEX,
            expirable: true,
            updatable: false,
            merklizedRootPosition: 0,
            version: 0,
            id: _userId,
            revocationNonce: $.countOfIssuedClaims,
            expirationDate: expirationDate,
            // data
            merklizedRoot: 0,
            indexDataSlotA: ownerAddress,
            indexDataSlotB: ownerBalance,
            valueDataSlotA: 0,
            valueDataSlotB: 0
        });
        uint256[8] memory claim = ClaimBuilder.build(claimData);

        uint256 hashIndex = PoseidonUnit4L.poseidon([claim[0], claim[1], claim[2], claim[3]]);
        uint256 hashValue = PoseidonUnit4L.poseidon([claim[4], claim[5], claim[6], claim[7]]);

        ClaimItem memory claimToSave =
            ClaimItem({id: $.countOfIssuedClaims, issuanceDate: convertTime(block.timestamp), claim: claim});

        $.idToCredentialSubject[$.countOfIssuedClaims].push(
            INonMerklizedIssuer.SubjectField({key: "balance", value: ownerBalance, rawValue: ""})
        );
        $.idToCredentialSubject[$.countOfIssuedClaims].push(
            INonMerklizedIssuer.SubjectField({key: "address", value: ownerAddress, rawValue: ""})
        );

        addClaimHashAndTransit(hashIndex, hashValue);
        saveClaim(_userId, claimToSave);
    }

    // saveClaim save a claim to storage
    function saveClaim(uint256 _userId, ClaimItem memory _claim) private {
        Storage storage $ = getStorage();

        $.userClaims[_userId].push($.countOfIssuedClaims);
        $.idToClaim[$.countOfIssuedClaims] = _claim;
        $.countOfIssuedClaims++;
    }

    // addClaimHashAndTransit add a claim to the identity and transit state
    function addClaimHashAndTransit(uint256 hashIndex, uint256 hashValue) private {
        identity.addClaimHash(hashIndex, hashValue);
        identity.transitState();
    }

    function convertTime(uint256 timestamp) private pure returns (uint64) {
        require(timestamp <= type(uint64).max, "Timestamp exceeds uint64 range");
        return uint64(timestamp);
    }
}
