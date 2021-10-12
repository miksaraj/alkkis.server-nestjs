import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlkoController } from './alko.controller';
import { AlkoService } from './alko.service';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: Product.name, schema: ProductSchema, collection: 'products'
    }])],
    controllers: [AlkoController],
    providers: [AlkoService],
    exports: [AlkoService]
})
export class AlkoModule {}
