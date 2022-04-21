import dotenv from 'dotenv';
import { AnimalEntity } from 'src/app.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config();
export const PostgresDataSource: PostgresConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_POST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  type: 'postgres',
  entities: [AnimalEntity],
  synchronize: true,
};
