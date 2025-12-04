import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlProvider } from './db/mysql.privider';
import { ItemsRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, mysqlProvider, ItemsRepository],
})
export class AppModule {}
