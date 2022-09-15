require("@nomicfoundation/hardhat-toolbox");
import { Network, Alchemy } from 'alchemy-sdk';


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TqzBFuSQ9h8f7_gkkScIPLWmZYuUNZuC',
      accounts: ['223e0b9ab26a5079d5fbfa06bc49e6f388abeb2f3dd3d9309cf47f6dedc4e606']
    
    }

  }
};
