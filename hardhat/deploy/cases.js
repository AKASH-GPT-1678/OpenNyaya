const hre = require("hardhat");


async function main() {

    const Courts = await hre.ethers.getContractFactory('Cases');

    console.log("Deploying");

    const courts = await Courts.deploy();

    await courts.waitForDeployment();

    const contractAddress = await courts.getAddress();
    
    console.log("Ticketing deployed to:", contractAddress);



}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
