import { Request, Response, Router } from "express";
import { WalletService } from "../service/wallet.service";
import dotenv from 'dotenv';
import { Client, CoinType, Wallet, WalletOptions } from "@iota/sdk";
import * as fs from "fs";

export class Walletcontroller {
    public router: Router;
    private walletService: WalletService;
    private client!: Client;
    private wallet!: Wallet;

    constructor() {
        dotenv.config();
        this.walletService = new WalletService();
        this.router = Router();
        this.routes();
        this.initializeClient();
        this.initializeWallet();
    }


    private routes() {
        this.router.get("/nodeInfo", this.nodeInfo);

    }

    private initializeClient = async () => {

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

    private nodeInfo = async (req: Request, res: Response) => {
        res.send((await this.client.getInfo()).nodeInfo)
    }

    private initializeWallet = async () => {
        try {
            const filePath = process.env.STRONGHOLD_SNAPSHOT_PATH as string;
            if (fs.existsSync(filePath)) {
                console.log("Im on the IF");

                this.wallet = new Wallet({
                    storagePath: process.env.WALLET_DB_PATH,
                })

            } else {
                console.log("Im on the ELSE");

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

    // TODO Benutzen um wallet wieder zugänglich zu machen?
    // await manager.stopBackgroundSync();
    // await manager.clearStronhgoldPassword();
    // await manger.destroy();


}

