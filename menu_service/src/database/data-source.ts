import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv";
import { Product } from "../entity/Product";
import { SizeInfo } from "../entity/SizeInfo";
import { Additional } from "../entity/Additional";
import { Category } from "../entity/Category";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT_LOCAL),
    username: process.env.USER_LOCAL,
    password: process.env.PASS_LOCAL,
    database: process.env.DATABASE_LOCAL,
    synchronize: true,
    logging: false,
    entities: [Product, SizeInfo, Additional, Category],
    migrations: ["./menu_service/src/migrations/*.ts"],
    subscribers: [],
})

