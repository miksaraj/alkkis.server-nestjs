import { Body, Controller, Post } from '@nestjs/common';
import { BacService } from './bac.service';
import { BacRequestDto } from './dto/bac-request.dto';

@Controller({
    path: 'bac',
    version: '1'
})
export class BacController {
    constructor(private bacService: BacService) {}

    @Post()
    returnBac(@Body() bacRequestDto: BacRequestDto): string {
        return this.bacService.getBac(bacRequestDto)
    }
}
