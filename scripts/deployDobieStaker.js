const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const DobieStaker = await hre.ethers.getContractFactory("DobieStaker");
  const dobieStaker = await DobieStaker.deploy("0x230677E9C940AA9faB4dc3d0d9Be2b16408371c6");

  await dobieStaker.deployed();

  console.log("DobieStaker deployed to:", dobieStaker.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
