import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/ProductRoutes';
import sizeInfoRoutes from './routes/SizeRoutes';
import categoryRoutes from './routes/CategoryRoutes';
import additionalRoutes from "./routes/AdditionalRoutes";


AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

const server = express();

server.use(bodyParser.json());


server.listen(3000, () => console.log("rodando...."));
server.use(express.json());

server.use(productRoutes);
server.use(sizeInfoRoutes);
server.use(categoryRoutes);
server.use(additionalRoutes);


}).catch(error => console.log(error));