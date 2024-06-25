import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from "./shared/routes/StoreRoutes";
import addressRoutes from "./shared/routes/AddressRoutes";
import tenantRoutes from "./shared/routes/TenantRoutes";
import * as dotenv from "dotenv"
import { json } from "node:stream/consumers";


dotenv.config();

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

    const server = express();
    server.get('/', (req, res) => res.status(200).json({
        msg: "Bem-vindo à store-service"
    }));
    const port = 3001
    server.listen(
        port, () => console.log(`Server is running at https://localhost:${port}`));
    
    server.use(bodyParser.json())
    server.use(storeRoutes);
    server.use(addressRoutes);
    server.use(tenantRoutes);
    


});