require("@nomicfoundation/hardhat-toolbox");



const PRIVATE_KEY = "0xf9e366fec6a95cd8d47937cab49373d3e7a39cbb60964ba6bf9846ee9a9b0fb8";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  networks: {

    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [PRIVATE_KEY]


    }

  }


};
// 0x0749a4AaF768f61B05B3569F7ef8290f51A85f3a
// 0x0749a4AaF768f61B05B3569F7ef8290f51A85f3a