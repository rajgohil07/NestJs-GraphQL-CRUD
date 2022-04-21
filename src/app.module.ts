import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDataSource } from './config/database-config';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgresDataSource),
    GraphQLModule.forRoot(),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
