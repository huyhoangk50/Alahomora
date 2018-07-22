// set provider
var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + "wpX77Y5cvP9fPe6Piv1k"));
// if (typeof web3 == "undefined") {    
//     web3js = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + "wpX77Y5cvP9fPe6Piv1k"));
// } else {
//     web3js = new Web3(web3.currentProvider);
// }

// accounts = web3js.eth.accounts;
// console.log(accounts);
// console.log("https://ropsten.infura.io/" + process.env.INFURA_API_KEY);
// console.log(process.env);