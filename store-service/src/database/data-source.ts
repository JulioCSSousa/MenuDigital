import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Address, Contact, Store, Tenant } from "../entity";



dotenv.config();

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
    entities: [Store, Address, Tenant, Contact],
    migrations: ["./menu_service/src/migrations/*.ts"],
    subscribers: [],
})


