import { AppDataSource } from "./database/data-source"
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/ProductRoutes';

AppDataSource.initialize().then(async () => {

    console.log("Here you can setup and run express / fastify / any other framework.");

const server = express();

server.use(bodyParser.json());
server.use('/products', productRoutes);

server.listen(3000, () => console.log("rodando...."));
server.use(express.json());
server.use(productRoutes);


}).catch(error => console.log(error));