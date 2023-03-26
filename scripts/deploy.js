// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  //const lockedAmount = hre.ethers.utils.parseEther("1");

  const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
  const hscp = await horoscopeNFT.deploy();
  await hscp.deployed();

  //since we are testing, you should mention your own Eth wallet address
  const myAddress="0x9dF25AC28a33b46824E08B89dcF706D314b77030";
  console.log("HoroscopeNFT Deployed to: ", hscp.address); 

  let txn = await hscp.mintNFT(myAddress, 'virgo');
  await txn.wait();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
