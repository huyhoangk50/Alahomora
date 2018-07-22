// import EthCrypto from 'eth-crypto'; 
// import contract from 'truffle-contract';

// updateModernSlavery  = async function (_financialYear, _totalSalary, _totalStaff, _sentiment, _msScore, _publicKey){
//     let encryptedFinancialYear = JSON.stringify(await EthCrypto.encryptWithPublicKey(_publicKey, _financialYear));
//     let encryptedTotalSalary = JSON.stringify(await EthCrypto.encryptWithPublicKey(_publicKey, _totalSalary));
//     let encryptedTotalStaff = JSON.stringify(await EthCrypto.encryptWithPublicKey(_publicKey, _totalStaff));
//     let encryptedSentiment = JSON.stringify(await EthCrypto.encryptWithPublicKey(_publicKey, _sentiment));

//     let modernSlaveryInstance = ModernSlaveryContract.new(
//         encryptedFinancialYear,
//         encryptedTotalSalary,
//         encryptedTotalStaff,
//         encryptedSentiment,
//         _msScore,
//         {from: accounts[0], gas: 6000000, data: modernSlaveryContractCode},
//         function(e, contract){
//             if(!e) {
//                 if(!contract.address) {
//                     console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
//                 } else {
//                     console.log("Contract mined! Address: " + contract.address);
//                 }
//             }
//         });
// }
// getPassportId = async function(){
//     if(accounts){
//         // RegistryContract.setProvider(web3.currentProvider);
//         var deployed;
//         RegistryContract.at(registryAddress).then(function(instance) {
//             var deployed = instance;
//             return instance.getPassportId(accounts[0]);
//         }).then(function(result) {
//             console.log(result);
//             // if passPortId is not created
//             if(result == "0x0000000000000000000000000000000000000000") { 
//                 console.log("empty");
//                 var a = []
//                 passportId = PassportIdContract.new('hoang', a, {from: accounts[0], gas: 4300000, gasPrice: 10000})
//                 .then(function(instance){
//                     console.log("instance.address");
//                     console.log(instance.address);
//                 })
//             }
//         });
//     }
// }

// // passPortId = getPassportId();