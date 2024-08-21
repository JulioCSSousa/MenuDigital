import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Product } from "../entity/Product"
import { Combined } from "../entity/Combined"

dotenv.config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.LOCAL_HOST,
    port: parseInt(process.env.LOCAL_PORT),
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DB,
    synchronize: true,
    logging: false,
    entities: [Product, Combined],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}']
})


