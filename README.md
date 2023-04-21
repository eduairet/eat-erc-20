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
        "sepolia-deploy": "npx hardhat run --network sepolia scripts/deploy.ts",
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
