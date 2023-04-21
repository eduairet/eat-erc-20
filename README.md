# EAT ERC-20 Token

This project has the Smart Contract for the EAT ERC-20 Token.

## Structure

-   Project configuration -> [`hardhat.config.ts`](./hardhat.config.ts)
-   Contract -> [`EatToken.sol`](./contracts/EatToken.sol)
-   Deploy Script -> [`deploy.ts`](./scripts/deploy.ts)
-   EatToken Tests -> [`deploy.ts`](./test/EatToken.ts)

## Tasks

-   Main tasks are wired to [npm scripts](./package.json):

    ```JSON
    "scripts": {
        "deploy": "npx hardhat run scripts/deploy.ts",
        "sepolia-deploy": "npx hardhat run scripts/deploy.ts --network sepolia",
        "compile": "npx hardhat compile",
        "test": "npx hardhat test"
    }
    ```

-   Just run them with the following shell commands

    ```Shell
    npm run deploy
    npm run sepolia-deploy
    npm run compile
    npm run test
    ```

## Live Token

-   Sepolia
    -   [0x66822E383d55c48bB84FA16Ae59d07aB3fA76948](https://sepolia.etherscan.io/address/0x66822E383d55c48bB84FA16Ae59d07aB3fA76948#code)
-   Airdrop

    -   An airdrop script is available on [`airdrop.ts`](./scripts/airdrop.ts)

        ```Shell
        npx hardhat run scripts/airdrop.ts
        ```

    -   It sends 50 EAT to three hardcoded addresses and it prints the block explorer URL of every transaction

        ```Shell
        https://sepolia.etherscan.io/tx/0x4df541755109b8c7603844d74cdc5ca23dad6cfa9a0ed308e2e8422fd320e2ec
        https://sepolia.etherscan.io/tx/0xe7b9a65d56981b6bf5502be1e6d8c4f6dfecae102585cff7a328a70b218a1ea2
        https://sepolia.etherscan.io/tx/0xe669c2a757795afac56067ce0ecf622b0c7cabad5fd4bf899b8a108b75b1318a
        ```
