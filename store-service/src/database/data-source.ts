import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Address} from "../entity/Address";
import { Tenant} from "../entity/Tenant";
import { Store} from "../entity/Store";
import { SocialMedia } from "../entity/SocialMedia";
import { Category } from "../entity/Category";


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
    logging: false,
    entities: [Store, Address, Tenant, SocialMedia],
    migrations: ["./menu_service/src/migrations/*.ts"],

    
})


