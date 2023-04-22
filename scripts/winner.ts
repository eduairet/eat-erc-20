import { ethers } from 'hardhat';
import { Wallet, Contract, ContractTransaction, ContractReceipt } from 'ethers';
import { config } from 'dotenv';
import { JsonRpcProvider } from '@ethersproject/providers/lib/json-rpc-provider.js';

config();
const { providers, getContractAt, utils } = ethers,
    { GOERLI_URL, PRIV_KEY } = process.env,
    dropValue: BigInt = BigInt(10) * BigInt(10 ** 18);

const main = async (): Promise<void> => {
    if (GOERLI_URL && PRIV_KEY) {
        const provider: JsonRpcProvider = new providers.JsonRpcProvider(
                GOERLI_URL
            ),
            signer: Wallet = new Wallet(PRIV_KEY, provider),
            eatToken: Contract = await getContractAt(
                'EatToken',
                '0xF866fAf261a3A7208fe70aFCB83e8746676e5316',
                signer
            ),
            bucket: Contract = await getContractAt(
                bucketAbi,
                '0x873289a1aD6Cf024B927bd13bd183B264d274c68',
                signer
            ),
            approve: ContractTransaction = await eatToken.approve(
                bucket.address,
                dropValue
            ),
            approved: ContractReceipt = await approve.wait();
        if (approved.transactionHash) {
            const drop: ContractTransaction = await bucket.drop(
                    '0xF866fAf261a3A7208fe70aFCB83e8746676e5316',
                    dropValue
                ),
                receipt: ContractReceipt = await drop.wait();
            receipt.logs.forEach(log => console.log(BigInt(log.data)));
            console.log(
                `https://goerli.etherscan.io/tx/${receipt.transactionHash}`
            );
        } else {
            throw new Error("Couldn't allow the drop");
        }
    }
};

var bucketAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'Winner',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'address', name: 'erc20', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'drop',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
