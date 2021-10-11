import { Controller, Get, Query, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AlkoService } from './alko.service';
import { Product } from './schema/product.schema';

@Controller('alko')
export class AlkoController {
    constructor(private alkoService: AlkoService) {}

    @Version(VERSION_NEUTRAL)
    @Get('all')
    async findAll(): Promise<Product[]> {
        return await this.alkoService.findAll()
    }

    @Version('1')
    @Get('search')
    async findByQuery(@Query('name') name: string): Promise<Product[]> {
        return await this.alkoService.findByQuery(name)
    }
}
