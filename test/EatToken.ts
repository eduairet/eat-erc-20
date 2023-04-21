import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers.js';
import { BigNumber } from 'ethers';
const { getContractFactory } = ethers;

describe('EatToken', function () {
    async function deployEatTokenFixture() {
        const [deployer, otherAccount]: SignerWithAddress[] =
            await ethers.getSigners();

        const EatToken = await getContractFactory('EatToken'),
            eatToken = await EatToken.deploy();

        await eatToken.deployed();

        return { eatToken, deployer, otherAccount };
    }

    describe('Deployment', function () {
        it('Should deploy the contract', async function () {
            const { eatToken } = await loadFixture(deployEatTokenFixture);
            expect(ethers.utils.isAddress(eatToken.address)).to.be.true;
        });
        it('Should have an initial supply of 1,000,000.00', async function () {
            const { eatToken } = await loadFixture(deployEatTokenFixture);
            const supply: BigNumber = await eatToken.totalSupply(),
                supplyDecimals: BigInt = supply.toBigInt() / BigInt(10 ** 18);
            expect(supplyDecimals).to.equal(1_000_000);
        });
        it('Name should be EatToken', async function () {
            const { eatToken } = await loadFixture(deployEatTokenFixture);
            const tokenName: string = await eatToken.name();
            expect(tokenName).to.equal('EatToken');
        });
        it('Symbol should be EAT', async function () {
            const { eatToken } = await loadFixture(deployEatTokenFixture);
            const symbol: string = await eatToken.symbol();
            expect(symbol).to.equal('EAT');
        });
    });
});
