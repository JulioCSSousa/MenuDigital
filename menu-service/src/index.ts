import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './shared/routes/menu-routes/ProductRoutes';
import categoryRoutes from './shared/routes/menu-routes/CategoryRoutes';
import additionalRoutes from "./shared/routes/menu-routes/CombinedRoutes";
import storeRoutes from "./shared/routes/store-routes/StoreRoutes";
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
    server.use(productRoutes);
    server.use(categoryRoutes);
    server.use(additionalRoutes);
    server.use(storeRoutes);

});