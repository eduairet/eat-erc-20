import { ethers } from 'hardhat';
import { ContractFactory, Contract } from 'ethers';
const { getContractFactory } = ethers;

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);

    const weiAmount = (await deployer.getBalance()).toString();
    console.log('Account balance:', ethers.utils.formatEther(weiAmount));

    const EatToken: ContractFactory = await getContractFactory('EatToken'),
        eatToken: Contract = await EatToken.deploy();

    await eatToken.deployed();

    console.log(`EatToken address: ${eatToken.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
