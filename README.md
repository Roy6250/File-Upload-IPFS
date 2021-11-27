# File-Upload-IPFS

Managing Patient documents across different Hospital is quite hassling. This Dapp, Hospital Blockchain Records helps in maintaining Patient's Medical history. 
Only Hospital authority has the priviledge to upload  Medical documents for the patients registered in our system. For storing the files, we have used IPFS, which
is a peer-to-peer distributed system.

## To Run on Locahost
1. Clone the Repo and istall dependencies
```
git clone https://github.com/somesh-banerjee/Crwd_Src.git
cd Crwd_Src
npm install
```
2. Create a [Infura](https://infura.io/) account and create a new project. Now copy the Project ID from settings Tab and paste it in the marked location in `/ethereum/web3.js` and `/ethereum/deploy.js` files.
3. Install metamask in your browser and log into your metasmask account.
4. Run the local webserver with any port
```
node server.js 5000
```
