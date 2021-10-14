import { Body, Controller, Post } from '@nestjs/common';
import { BacService } from './bac.service';
import { BacRequestDto, BacRepresentation } from 'src/alkkis';

@Controller({
    path: 'bac',
    version: '1'
})
export class BacController {
    constructor(private bacService: BacService) {}

    @Post()
    returnBac(@Body() bacRequestDto: BacRequestDto): BacRepresentation {
        return this.bacService.getBac(bacRequestDto)
    }
}
