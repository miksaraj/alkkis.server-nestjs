import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlkoController } from './alko/alko.controller';
import { BacController } from './bac/bac.controller';
import { AlkoModule } from './alko/alko.module';
import { BacModule } from './bac/bac.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/alko'),
    AlkoModule,
    BacModule
  ],
  controllers: [AlkoController, BacController],
  providers: [],
})
export class AppModule {}
