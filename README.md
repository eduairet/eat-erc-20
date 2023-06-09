# EAT ERC-20 Token

This project has the Smart Contract for the EAT ERC-20 Token.

## Structure

-   Project configuration -> [`hardhat.config.ts`](./hardhat.config.ts)
-   Contract -> [`EatToken.sol`](./contracts/EatToken.sol)
-   Deploy Script -> [`deploy.ts`](./scripts/deploy.ts)
-   Airdrop Script -> [`airdrop.ts`](./scripts/airdrop.ts)
-   Winner Script -> [`winner.ts`](./scripts/winner.ts)
-   EatToken Tests -> [`EatToken.ts`](./test/EatToken.ts)

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
-   Goerli
    -   [0xF866fAf261a3A7208fe70aFCB83e8746676e5316](https://goerli.etherscan.io/address/0xF866fAf261a3A7208fe70aFCB83e8746676e5316#code)
-   Airdrop

    -   An airdrop script is available on [`airdrop.ts`](./scripts/airdrop.ts)

        ```Shell
        npx hardhat run scripts/airdrop.ts
        ```

    -   It sends 50 EAT to three hardcoded addresses and it prints the block explorer URL of every transaction

        ```Shell
        https://sepolia.etherscan.io/tx/0x1685fa6f948bfb7dbd7c4f1d12c3da60af3c268b8c90ff89800b24048463f394
        https://sepolia.etherscan.io/tx/0xb2f9a1b6a06e07d486b9c37d8b19b1af8035eff48f05dc689fbd2cb09d7e296a
        https://sepolia.etherscan.io/tx/0x428294fa288a65045ae1520fa8af1f118d854995b9663bf31e64bd7175c009d7
        https://goerli.etherscan.io/tx/0x919bb41e21d94c838ddd214de9d9792167a4ab1a0fd8136c2e7e3cf8baf8d807
        https://goerli.etherscan.io/tx/0x739a0c4c55ab4a204200ddd5ceb70790256a11a2629d876bfee5b36fede0369e
        https://goerli.etherscan.io/tx/0x349d8d7c2fe183009fb15006bf0f919ccf5310d26d8342b578d90f860555dd29
        ```

-   Winner
    -   The script works only on Goerli and it's in the scripts directory as [winner.ts](./scripts/winner.ts)
    -   This script sends 10 EAT to the `Bucket` contract at [0x873289a1aD6Cf024B927bd13bd183B264d274c68](https://goerli.etherscan.io/address/0x873289a1ad6cf024b927bd13bd183b264d274c68)
    -   The transfer emits the `Winner` event from `Bucket`, which displays the winner address, in this case, the signer
        -   This transaction requires to give allowance to the `Bucket` contract to take the drop value from the `ERC-20` token using the function `approve()`
        -   When the value and spender (`Bucket`) are approved the `drop()` method from `Bucket` can be called by the signer
        -   Check the transaction [0x9575f88d54b29899fae7100513b1adaeb4eb08c6d25ac2f53e3131de6381871f](https://goerli.etherscan.io/tx/0x9575f88d54b29899fae7100513b1adaeb4eb08c6d25ac2f53e3131de6381871f#eventlog) executed with the script
