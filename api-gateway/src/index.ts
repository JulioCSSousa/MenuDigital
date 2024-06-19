import { AppDataSource } from "./database/data-source"
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

    const server = express();

    server.use(bodyParser.json());


    server.listen(3000, () => console.log("rodando...."));
    server.use(express.json());

});