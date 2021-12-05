import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { Routes } from './router';
import { server } from './interfaces/serverInterface';
import { DbConnect } from './dbConfig';

class main implements server {
    
    private port = 3100;
    app = express();
    constructor () {}

    public initializedServer () {

        const router = new Routes();
        new DbConnect().connect();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/api',router.routes());

        this.app.listen( process.env.PORT || this.port , () => { console.log(`server listen on port ==> ${ process.env.PORT || this.port}`) })
    }
}

const expressServer = new main();

expressServer.initializedServer();
