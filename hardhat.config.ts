import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const { SEPOLIA_URL, PRIV_KEY } = process.env;

const config: HardhatUserConfig = {
    solidity: '0.8.19',
    networks: {
        sepolia: {
            url: SEPOLIA_URL,
            accounts: PRIV_KEY ? [PRIV_KEY] : undefined,
        },
    },
};

export default config;
