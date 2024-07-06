import { AppDataSource } from "./database/data-source";
const cors = require('cors');
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './shared/routes/ProductRoutes';
import additionalRoutes from "./shared/routes/CombinedRoutes";
import * as dotenv from "dotenv";

dotenv.config();
const server = express();

let dbConnectionEstablished = false;

export async function testDatabaseConnection(): Promise<void> {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established successfully.');
    dbConnectionEstablished = true;
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

server.get('/', (_req, res) => res.status(200).json(
  {
    msg: "Welcome to menu-service"
  }
));

server.use(cors());
server.use(bodyParser.json());


server.use((req, res, next) => {
  if (!dbConnectionEstablished) {
    return res.status(503).json({
      error: 'Service Unavailable: Unable to connect to the database. Contact support, please'
    });
  }
  next();
});

server.use(productRoutes);
server.use(additionalRoutes);


export { server };
