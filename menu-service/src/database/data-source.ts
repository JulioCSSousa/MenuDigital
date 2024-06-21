import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Category, Combined, Product, Store } from "../entity";
import { HasWalkedCache } from "glob/dist/commonjs/processor";



dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(3306),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Product,Combined, Category, Store],
    migrations: ["./menu_service/src/migrations/*.ts"],
    subscribers: [],
})

