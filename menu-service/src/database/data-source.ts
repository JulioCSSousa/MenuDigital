import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import {Product} from "../entity/Product"
import {Combined} from "../entity/Combined"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.PROD_DB_HOST,
    port: Number(process.env.PROD_DB_PORT),
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Product,Combined],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})

