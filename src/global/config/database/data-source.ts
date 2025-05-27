// src/global/config/database/data-source.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { databaseConfig } from './typeORM.config';

// Load env variables before using databaseConfig()
config();

const AppDataSource = new DataSource({
  ...databaseConfig(),
  migrations: ['database/migrations/*{.ts,.js}'],
});

export default AppDataSource;
