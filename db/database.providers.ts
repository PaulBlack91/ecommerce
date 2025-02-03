import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'ecommerce',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
