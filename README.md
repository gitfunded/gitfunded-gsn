# GitFunded GSN Started kit

This kit is based on the [started-kit-gsn](https://github.com/OpenZeppelin/starter-kit-gsn)

## Requirements

Install Ganache and Truffle

```
npm install -g truffle@5.0.41 ganache-cli@6.7.0
```

## Getting started

1. Start local blockchain node

    ```
    ganache-cli --deterministic
    
    ```
2. Install the dependencies

    ```
    npm install
    ```   
   
3. Deploy the contract and make sure to invoke the initiate method and note down the contract address

    ```
    npx @openzeppelin/cli create
    ```

4. Fund the contract

    ```
    npx oz-gsn fund-recipient --recipient <contract-address>
    ```
    
5. Deploy relayHub and start the relayer    

    ``` 
    npx @openzeppelin/gsn-helpers run-relayer
    ```

6. Run the frontend app

    ```
    cd client && npm install && npm start
    ```
