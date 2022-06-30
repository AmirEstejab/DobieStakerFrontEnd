require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    rinkeby: { //Deployed to: 0x54781bBfB1EBD85b75424A866A6670Bed03608BD
      url: 'https://rinkeby.infura.io/v3/b66f9ffb2d2c4a2fa368aac7950a25ed',
      accounts:['a0dd15dbe08b41f85dfe16347636076bc4b806748aaea91ba2ee6de5c05f08f2'],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY, 
  }, 
};
