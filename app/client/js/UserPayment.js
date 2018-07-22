var Tx = require('ethereumjs-tx');

var userAddress= "0xDca45834e3C319fb6069E136097f237F512A8Ca6";
var privateKey = Buffer.from("3d0dad8dd6752db29049adb0fa911e742af1d67ef41472af48b5b334c37471ba", 'hex');
var count;
console.log(privateKey);
Template['user_payment'].onCreated(function(){
    console.log("web3.eth.gasPrice");
    web3.eth.getGasPrice(function callback(error, result){ 
        console.log(result)
        console.log("result")
    })
});


Template.user_payment.helpers({
    fee: function (){
        var fee = localStorage.getItem("vehicleFee");
        return fee;
    }
});

Template.user_payment.events({
    "submit .user-payment": function(event){
        event.preventDefault();
        var gasPrice = 1100000000;
        var gasLimit = 4605201;
        var address = "0xDca45834e3C319fb6069E136097f237F512A8Ca6";
        var amount = localStorage.getItem("vehicleFee");;
        // var totalStaff = event.target.totalStaff.value;
        
        // return false;
        // instance = TransportationTokenContract.at(transportationTokenAddress);
        
        console.log(TransportationTokenContract.methods);
        
        web3.eth.getTransactionCount(userAddress, function(err, result){
            count = result;
            console.log("count");
            console.log(count);
            tx = new Tx({
                value: '0x0', 
                from: userAddress,
                nonce: count,
                gasPrice: "0x" + gasPrice.toString(16),
                gas: "0x" + gasLimit.toString(16),
                gasLimit: "0x" + gasLimit.toString(16),
                to: address,
                data: TransportationTokenContract.methods.transfer(address, amount).encodeABI(),  
                chainId: "0x03"
            })
            console.log("0x" + gasPrice.toString(16));
            console.log("0x" + gasLimit.toString(16));
            tx.sign(privateKey);
            var serializedTx = tx.serialize();
            console.log(serializedTx);
            web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            .on('transactionHash', function(hash){
                console.log("hash");
                Bert.alert("<h1>Submited successfully!<h1>", "success", 'growth-top-right');
            })
            .on('receipt', function(receipt){
                console.log("receipt");
                setTimeout(Bert.alert("mined", "success", 'growth-top-right'), 3000);
            })
            .on('confirmation', function(confirmationNumber, receipt){ 
                console.log("confirmation");
                Bert.alert("The payment was success!", "success", 'growth-top-right');
                count = count + 1;
             })
            .on('error', console.error);
        });
        
        // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
        //     if (!err)
        //         console.log(hash);
        //     else
        //         console.log(err);
        // });
    }
})