import { ethers } from 'hardhat';
import { Wallet, Contract, ContractTransaction, ContractReceipt } from 'ethers';
import { config } from 'dotenv';
import { JsonRpcProvider } from '@ethersproject/providers/lib/json-rpc-provider.js';

config();
const { providers, getContractAt } = ethers,
    { SEPOLIA_URL, PRIV_KEY } = process.env;

async function main(): Promise<void> {
    if (PRIV_KEY && SEPOLIA_URL) {
        const provider: JsonRpcProvider = new providers.JsonRpcProvider(
                SEPOLIA_URL
            ),
            signer: Wallet = new Wallet(PRIV_KEY, provider),
            eatToken: Contract = await getContractAt(
                'EatToken',
                '0x66822E383d55c48bB84FA16Ae59d07aB3fA76948',
                signer
            ),
            airdropList: string[] = [
                '0x87c9ADAEA58209abc771bFF5F70bFE71535D67df',
                '0xDfdBF53B3181893918AA23F15173A7f4C10FA087',
                '0x79D755FBc47d4BB9e1957708C482BD2A0e91b812',
            ],
            airdropValue: BigInt = BigInt(50 * 10 ** 18);
        for (const airdrop of airdropList) {
            const tx: ContractTransaction = await eatToken.transfer(
                    airdrop,
                    airdropValue
                ),
                receipt: ContractReceipt = await tx.wait();
            console.log(
                `https://sepolia.etherscan.io/tx/${receipt.transactionHash}`
            );
        }
    }
}

main()
    .then(() => process.exit(1))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
