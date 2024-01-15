import { Client } from '@iota/sdk';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { WasmClientService } from "../lib/wasmclient/lib/index";
import { Walletcontroller } from './controller/wallet.controller';
import { configDotenv } from 'dotenv';
import { FestivalController } from './controller/festival.controller';


class Server {
    private walletController!: Walletcontroller
    private festivalController!: FestivalController


    private app: express.Application;


    constructor() {
        this.app = express();
        configDotenv();
        this.configuration();
        this.routes();
        this.initializeErrorHandling();

    }

    public configuration() {
        /** Logging */
        this.app.use(morgan('dev'));

        // ** Set Port */
        this.app.set('port', process.env.PORT || 3001);

        /** Takes care of JSON data */
        this.app.use(express.json());

        /** Takes care of URL encdoded data */
        this.app.use(express.urlencoded({ extended: true }));

        /** RULES OF OUR API */
        this.app.use((req, res, next) => {
            // set the CORS policy
            res.header('Access-Control-Allow-Origin', '*');
            // set the CORS headers
            res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
            // set the CORS method headers
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
                return res.status(200).json({});
            }
            next();
        });

    }

    public routes() {
        this.walletController = new Walletcontroller();
        this.festivalController = new FestivalController();

        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hello world!");
        });

        // this.app.use("/api/user", this.userController.router);
        this.app.use("/api/wallet", this.walletController.router);
        this.app.use("/api/russfest", this.festivalController.router)

    }

    public initializeErrorHandling() {
        // TODO

    }

    public start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening ${this.app.get("port")} port`);
        });
    }

}

const server = new Server();
server.start()
