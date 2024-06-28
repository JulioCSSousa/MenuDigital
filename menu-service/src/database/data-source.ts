import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Category} from "../entity/Category";
import {Product} from "../entity/Product"
import {Combined} from "../entity/Combined"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(3306),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Product,Combined, Category],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})

