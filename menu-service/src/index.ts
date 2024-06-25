import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './shared/routes/ProductRoutes';
import categoryRoutes from './shared/routes/CategoryRoutes';
import additionalRoutes from "./shared/routes/CombinedRoutes";
import * as dotenv from "dotenv"


dotenv.config();

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

    const server = express();
    server.get('/', (req, res) => res.status(200).json(
        {
            msg: "bem vindo à menu-service"
        }));

    const port = 3000
    server.listen(
        port, () => console.log(`Server is running at https://localhost:${port}`));

    server.use(productRoutes);
    server.use(categoryRoutes);
    server.use(additionalRoutes);
    
});