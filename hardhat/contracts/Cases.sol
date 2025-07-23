// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Cases {
    address contractAddress = address(this);

    enum CourtCategory {
        District,
        High,
        Supreme
    }

    enum CourtType {
        Criminal,
        Civil,
        Family,
        Consumer,
        Labour,
        Tax,
        Constitutional,
        Administrative,
        SmallClaims,
        GeneralAll
    }

    struct CourtDetails {
        string name;
        string state;
        CourtCategory category;
        CourtType typeofCourt;
        string adminUserName;
        bytes32 adminPassword;
        string courtId;
    }

    CourtDetails[] public courts;

    uint randNonce = 0;

    // Defining a function to generate
    // a random number
    function randMod(uint _modulus) private returns (uint) {
        // increase nonce
        randNonce++;
        return
            uint(
                keccak256(
                    abi.encodePacked(block.timestamp, msg.sender, randNonce)
                )
            ) % _modulus;
    }

    // Helper: Convert bytes32 to string (hex)
    function toHexString(bytes32 data) internal pure returns (string memory) {
        bytes memory hexChars = "0123456789abcdef";
        bytes memory str = new bytes(64);
        for (uint i = 0; i < 32; i++) {
            str[i * 2] = hexChars[uint(uint8(data[i] >> 4))];
            str[1 + i * 2] = hexChars[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }

    function addCourt(
        string memory _name,
        string memory _state,
        CourtCategory _category,
        CourtType _typeofCourt,
        string memory _adminUserName,
        string memory _password
    ) external payable returns (string memory) {
        require(
            msg.value == 1 ether,
            "To Add Your Own Create you need one ether"
        );

        bytes32 hashPassword = keccak256(abi.encodePacked(_password));

        bytes32 genrateCourtId = keccak256(
            abi.encodePacked(_name, _state, _typeofCourt)
        );

        CourtDetails memory newCourt = CourtDetails({
            name: _name,
            state: _state,
            category: _category,
            typeofCourt: _typeofCourt,
            adminUserName: _adminUserName,
            adminPassword: hashPassword,
            courtId: toHexString(genrateCourtId)
        });

        courts.push(newCourt);

        return toHexString(genrateCourtId);
    }

    function createCase() public {}
}
