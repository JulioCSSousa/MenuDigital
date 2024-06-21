import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import storeRoutes from "./shared/routes/StoreRoutes";
import contactRoutes from "./shared/routes/ContactRoutes";
import addressRoutes from "./shared/routes/AddressRoutes";
import tenantRoutes from "./shared/routes/TenantRoutes";
import * as dotenv from "dotenv"


dotenv.config();

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

    const server = express();
    server.use(bodyParser.json());


    server.listen(
        3000, () => console.log(`Server is running at https://localhost:${3000}`)

);
    server.use(express.json());

    server.use(storeRoutes);
    server.use(contactRoutes);
    server.use(addressRoutes);
    server.use(tenantRoutes);
    


});