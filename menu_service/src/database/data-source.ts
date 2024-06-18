import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
import { Product } from "../entity/Product";
import { Category } from "../entity/Category";
import { Store } from "../entity/Store";
import { Combined } from "../entity/CombineD";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_LOCAL,
    port: Number(process.env.PORT_LOCAL),
    username: process.env.USER_LOCAL,
    password: process.env.PASS_LOCAL,
    database: process.env.DATABASE_LOCAL,
    synchronize: true,
    logging: false,
    entities: [Product,Combined, Category, Store],
    migrations: ["./menu_service/src/migrations/*.ts"],
    subscribers: [],
})

