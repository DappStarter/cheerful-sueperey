require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind huge grace lobster frame slim'; 
let testAccounts = [
"0x589b100bdacdeee19689a937ff6bbdfd19242c4b06169eb4c5ddc786db6121ee",
"0xae59a4052fce4ee604bb0a74ecdf7b4668dd73e55599b4a02f90f28dc5c141f6",
"0x05e6ab4f6298a3a3a469fddae659548a41bfd9d8cc445687b8ca8246881f1c24",
"0x467a69ce56502d647d38b26abe9252cc0a71d3f77a21e4ef5de82b90e5bf86d0",
"0xd853895a989d0cf5df87ac48f0f02e83205dbb28cab2995a76d5e52009099028",
"0x7c98d8f0de40bde692f800d021160632b183ae6d1fc205349068ca7b766ed62e",
"0x01c1e01a69fbad112df564782e25556afea247ee4f76859fb41e68da726c38fa",
"0x4103b8f11232e17ddbb56cf1867fa03d3e76f67426a9f5b746728f069dd4123f",
"0x4c853b77c965e60e097dfc9d2fc259ee5538202f7cd4d5f47720ca2d6406bf2f",
"0x40cb5f0f07ca530e2f0de83f85277d98f5441ffe2f3fa5351d0dde837ba3812e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
