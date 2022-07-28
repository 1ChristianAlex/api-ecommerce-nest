import { DataSource, DataSourceOptions } from 'typeorm';
import * as Entity from '../database/entity';
import {
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  DB_URL,
  POSTGRES_USER,
} from './environment';

const postgressOptions = {
  type: 'postgres',
  host: DB_URL,
  port: parseInt(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Object.values(Entity)],
  synchronize: true,
  logging: true,
  migrationsTableName: 'migrations',
};

const postgresConfig = new DataSource(
  postgressOptions as unknown as DataSourceOptions,
);

export { postgresConfig, postgressOptions };
