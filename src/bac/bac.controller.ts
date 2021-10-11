import { Body, Controller, Post } from '@nestjs/common';
import { BacRequestDto } from './dto/bac-request.dto';

@Controller({
    path: 'bac',
    version: '1'
})
export class BacController {
    @Post()
    returnBac(@Body() bacRequestDto: BacRequestDto): [number, string] {
        console.log(bacRequestDto)
        return [0.01, 'This is a test blood alcohol content output']
    }
}
