// import ehers.js
const { ethers } = require("hardhat");

async function main() {
    // create factory
    const fundMeFactory = await ethers.getContractFactory("FundMe");
    // deploy 
    const fundMe = await fundMeFactory.deploy(10);
    await fundMe.waitForDeployment();
    console.log(`contract has been deployed to: ${fundMe.target}`);
}
main().then().catch((error) => {
    console.error(error);
    process.exit(1);
});
