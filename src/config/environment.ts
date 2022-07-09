import * as dotenv from 'dotenv';

dotenv.config();

export const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PORT,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_PORT,
  DB_URL,
  POSTGRES_PASSWORD,
} = process.env;
