import { Module } from '@nestjs/common';

import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
})
export class AppModule {}
