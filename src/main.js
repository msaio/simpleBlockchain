const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9b2d431e2caa570b3d710cac54b8947efe6fb07126441bdd7dc6d5ea3c6fbae1');
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'Public key goes here', 100);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log("Starting the miner ....");
coin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'Public key 2', 1100);
tx2.signTransaction(myKey);
coin.addTransaction(tx2);

console.log("Starting the miner again....");
coin.minePendingTransactions(myWalletAddress);

console.log('Balance of Cyka is:  ',coin.getBalanceOfAddress(myWalletAddress));

console.log("Is chain valid? ", coin.isChainValid());







