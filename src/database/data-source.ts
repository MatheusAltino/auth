import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../app/entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dbauth",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Db running!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })