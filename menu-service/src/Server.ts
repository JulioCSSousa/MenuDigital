import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './shared/routes/ProductRoutes';
import additionalRoutes from "./shared/routes/CombinedRoutes";
import * as dotenv from "dotenv"


dotenv.config();
const server = express();

AppDataSource.initialize().then(async () => {

    server.get('/', (req, res) => res.status(200).json(
        {
            msg: "bem vindo ao menu-service"
        }));

    server.use(bodyParser.json())
    server.use(productRoutes);
    server.use(additionalRoutes);
    
});

export {server};