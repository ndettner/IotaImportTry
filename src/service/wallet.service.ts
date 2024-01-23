import { Request, Response, Router } from "express";
import { Account, Client, CoinType, Wallet, WalletOptions } from "@iota/sdk";
import * as fs from "fs";


export class WalletService {

    public client!: Client;
    public wallet!: Wallet;


    constructor() {
        this.initializeClient()
        this.initializeWallet()
    }



    async initializeClient() {
        console.log(process.env.TESTNET_API_SHIMMER);

        const client: Client = new Client({
            nodes: [process.env.TESTNET_API_SHIMMER as string],
        });

        try {
            const nodeInfo = (await client.getInfo()).nodeInfo;
            console.log(nodeInfo);
            this.client = client;
        } catch (error) {
            console.error('Error: ', error);
        }
    }



    private initializeWallet = async () => {
        try {
            const filePath = process.env.STRONGHOLD_SNAPSHOT_PATH as string;
            if (fs.existsSync(filePath)) {
                console.log("RETRIEVING WALLET");

                this.wallet = new Wallet({
                    storagePath: process.env.WALLET_DB_PATH,
                })

            } else {
                console.log("CREATING NEW WALLET");

                const walletOptions: WalletOptions = {
                    storagePath: process.env.WALLET_DB_PATH,
                    clientOptions: {
                        nodes: [process.env.TESTNET_API_SHIMMER as string],
                    },
                    coinType: CoinType.Shimmer,
                    secretManager: {
                        stronghold: {
                            snapshotPath: process.env.STRONGHOLD_SNAPSHOT_PATH,
                            password: process.env.STRONGHOLD_PASSWORD,
                        },
                    }

                }
                this.wallet = new Wallet(walletOptions);

                await this.wallet.storeMnemonic(process.env.MNEMONIC as string)

            }

        }

        catch (error) {
            console.log(error);
        }

    }

    /**
     * nodeInfo
     * returns Info of ShimmerNode
     */
    public async nodeInfo() {
        return (await this.client.getInfo()).nodeInfo
    }

    /**
     * getBalance
     * GetsBalance from an account stored in the local db/Stronghold. 
     * If no account exists, an account will be created
     */
    public async getBalance(userId: string) {

        const account = await this.getOrCreateAccount(userId);
        return this.requestBalance(account!);


    }

    private async getOrCreateAccount(userId: string): Promise<Account> {
        // If an account already exists
        try {
            console.log("RETRIEVE ACCOUNT");

            const account = this.wallet.getAccount(userId)

            return await account
        } // If no account exists create a new account, generate a adress an request Funds
        catch (error) {

            await this.wallet.setStrongholdPassword(
                process.env.STRONGHOLD_PASSWORD as string
            )

            console.log("CREATE ACCOUNT");
            const account = this.wallet.createAccount({ alias: userId });

            console.log("CREATE ADDRESS");
            const address = (await (await account).generateEd25519Addresses(1))[0];

            console.log("REQUEST FUNDS");
            await this.client.requestFundsFromFaucet(process.env.FAUCET_URL as string, address.address)

            return account
        }

    }

    private async requestBalance(account: Account) {

        console.log("REQUESTING BALANCE");

        await this.wallet.setStrongholdPassword(
            process.env.STRONGHOLD_PASSWORD as string
        )

        const syncBalance = await account.sync();
        const baseCoinBalance = syncBalance.baseCoin

        await this.wallet.stopBackgroundSync();
        await this.wallet.clearStrongholdPassword()

        return baseCoinBalance

    }
}