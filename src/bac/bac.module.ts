import { Module } from '@nestjs/common'
import { BacController } from './bac.controller';
import { BacService } from './bac.service';

@Module({
    controllers: [BacController],
    providers: [BacService],
    exports: [BacService]
})
export class BacModule {}