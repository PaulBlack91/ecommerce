import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/database.providers';

@Module({
  imports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
