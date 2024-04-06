import { ethers } from "hardhat";

async function main() {

    const erc20 = await ethers.deployContract("ERC20");
    await erc20.waitForDeployment();
    console.log(`Token  deployed to ${erc20.target}`);

    const vault = await ethers.deployContract("Vault", [erc20.target]);
    await vault.waitForDeployment();
    console.log(`Vault  deployed to ${vault.target}`)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
