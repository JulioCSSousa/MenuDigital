import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from "./shared/routes/StoreRoutes";
import addressRoutes from "./shared/routes/AddressRoutes";
import tenantRoutes from "./shared/routes/TenantRoutes";
import * as dotenv from "dotenv"


dotenv.config();
const server = express();


AppDataSource.initialize().then(async () => {
    
    server.get('/', (req, res) => res.status(200).json({
        msg: "Bem-vindo à store-service"
    }));

    server.use(bodyParser.json())
    server.use(storeRoutes);
    server.use(addressRoutes);
    server.use(tenantRoutes);
    


});

export {server}