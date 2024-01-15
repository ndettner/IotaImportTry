import { Request, Response, Router } from "express";
import { WalletService } from "../service/wallet.service";

export class Walletcontroller {
    public router: Router;
    private walletService: WalletService;


    constructor() {
        this.walletService = new WalletService();
        this.router = Router();
        this.routes();
    }


    private routes() {

    }

}

