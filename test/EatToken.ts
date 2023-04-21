import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers.js';
const { getContractFactory } = ethers;

describe('EatToken', function () {
    async function deployEatTokenFixture() {
        const [owner, otherAccount]: SignerWithAddress[] =
            await ethers.getSigners();

        const EatToken = await getContractFactory('EatToken'),
            eatToken = await EatToken.deploy();

        await eatToken.deployed();

        return { eatToken, owner, otherAccount };
    }

    describe('Deployment', function () {
        it('Should deploy the contract', async function () {
            const { eatToken } = await loadFixture(deployEatTokenFixture);
            expect(ethers.utils.isAddress(eatToken.address)).to.be.true;
        });
    });
});
