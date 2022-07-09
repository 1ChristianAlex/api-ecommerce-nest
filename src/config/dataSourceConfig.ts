import { DataSource } from 'typeorm';
import {
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  DB_URL,
  POSTGRES_USER,
} from './environment';

const connectionSource = new DataSource({
  type: 'postgres',
  host: DB_URL,
  port: parseInt(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [
    'src/database/entity/*.entity{.ts,.js}',
    'src/database/entity/*.schema/*.entity{.ts,.js}',
  ],
  migrationsTableName: 'migration',
  migrations: ['src/database/migration/*.ts'],
});

export { connectionSource };
