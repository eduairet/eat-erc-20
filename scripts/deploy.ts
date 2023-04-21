import { ethers } from 'hardhat';
import { ContractFactory, Contract } from 'ethers';
const { getContractFactory } = ethers;

async function main() {
    const EatToken: ContractFactory = await getContractFactory('EatToken'),
        eatToken: Contract = await EatToken.deploy();

    await eatToken.deployed();

    console.log(`EatToken contract address: ${eatToken.address}`);
}

main()
    .then(() => (process.exitCode = 0))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
