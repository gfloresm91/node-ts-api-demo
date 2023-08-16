import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';

const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/db/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;