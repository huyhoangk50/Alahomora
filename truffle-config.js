// require('dotenv').config();
require('babel-register')({
  ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
});
require('babel-polyfill');


var HDWalletProvider = require("truffle-hdwallet-provider");

// var infura_apikey = "XXXXXX";
var mnemonic = "jealous before broom fork frame girl escape wide vague initial pepper display";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 9545,
            gas: 6605201,
            gasPrice: 10000000000,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/wpX77Y5cvP9fPe6Piv1k"),
            network_id: 3,
            gas: 690000
        },
        rinkeby: {
            provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/wpX77Y5cvP9fPe6Piv1k"),
            network_id: 4,
            gas: 6900000,
            gasPrice: 100000000000
        }
    }
};