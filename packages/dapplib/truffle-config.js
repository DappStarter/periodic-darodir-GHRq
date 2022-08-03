require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain method include kite bottom tortoise'; 
let testAccounts = [
"0xc5eca4c0a8d74ee8f6f9ad4b393adea409dd8a14d048f2a99770d4198bb2cc98",
"0x8ce440a251a325f97c1f7917ba7a7854e2b5d887cd57735d014949fb3b0373b9",
"0x73231207bb6a3a90d858119615f0648d7fcb99e797568727cf3c5eb0c9f432e8",
"0xd9b6cfba624eaf81df3987d795e9c6ed1f914d0eed8ada678b90d86da6faa30b",
"0x80e1a4eff94b95c5a8085f93c608c135adda13603fabd35ef504929a52e7c4e5",
"0x317ac9b39c73a7d2f290413ff0491cd4f549c418ddf0306195987080fda3babd",
"0x38fc5156a0cda32cfb2596326b85937e19c55288d6cfca4493059b10451c398c",
"0x68ec4f7864c92dcc1492b27db2582b87f895924dd21b92689ec15e77ef003435",
"0x407e043e98ef6661455128dacf4b2573c66b7514000b972a12a631b749c0336d",
"0x5c6d2c2154840d7133c9b8f2f4b9ea1195e61c3ddf8cba4d0686fd717b391445"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

