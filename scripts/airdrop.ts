import { ethers } from 'hardhat';
import { Wallet, Contract, ContractTransaction, ContractReceipt } from 'ethers';
import { config } from 'dotenv';
import { JsonRpcProvider } from '@ethersproject/providers/lib/json-rpc-provider.js';

config();
const { providers, getContractAt } = ethers,
    { SEPOLIA_URL, GOERLI_URL, PRIV_KEY } = process.env;

interface Network {
    url: string;
    address: string;
    explorer: string;
}

async function main(): Promise<void> {
    if (PRIV_KEY && SEPOLIA_URL && GOERLI_URL) {
        const networks: Network[] = [
            {
                url: SEPOLIA_URL,
                address: '0x66822E383d55c48bB84FA16Ae59d07aB3fA76948',
                explorer: 'https://sepolia.etherscan.io',
            },
            {
                url: GOERLI_URL,
                address: '0xF866fAf261a3A7208fe70aFCB83e8746676e5316',
                explorer: 'https://goerli.etherscan.io',
            },
        ];
        for (const network of networks) {
            const provider: JsonRpcProvider = new providers.JsonRpcProvider(
                    network.url
                ),
                signer: Wallet = new Wallet(PRIV_KEY, provider),
                eatToken: Contract = await getContractAt(
                    'EatToken',
                    network.address,
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
                    `${network.explorer}/tx/${receipt.transactionHash}`
                );
            }
        }
    }
}

main()
    .then(() => process.exit(1))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
