import { Request, Response, Router } from "express";
import { WalletService } from "../service/wallet.service";
import dotenv from 'dotenv';

export class Walletcontroller {
    public router: Router;
    private walletService: WalletService;

    constructor() {
        dotenv.config();
        this.walletService = new WalletService();
        this.router = Router();
        this.routes();
    }


    private routes() {
        this.router.get("/nodeInfo", this.nodeInfo);
        this.router.post("/getBalance", this.getBalance)
    }

    private getBalance = async (req: Request, res: Response) => {

        try {
            const userID: string = req.body["userId"]

            let balance = await this.walletService.getBalance(userID)
            res.send(balance.available.toString());
        } catch (error) {
            res.send(error)
        }
    }

    private nodeInfo = async (req: Request, res: Response) => {
        res.send(this.walletService.nodeInfo())
    }

}

