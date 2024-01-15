import { Client } from '@iota/sdk';
import express from 'express';
import { WasmClientService } from "../lib/wasmclient/lib/index";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send('Hello World!');

    const client = new Client({
        nodes: ['https://api.testnet.shimmer.network'],
    });

    try {
        const nodeInfo = (await client.getInfo()).nodeInfo;
        console.log(nodeInfo);

        let svc: WasmClientService = new WasmClientService("http://localhost:19090");

        


    } catch (error) {
        console.error('Error: ', error);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
