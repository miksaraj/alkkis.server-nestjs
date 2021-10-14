import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
    // Not even sure if this will work...
    @Prop()
    _id: string

    @Prop()
    num: string

    @Prop()
    name: string

    @Prop()
    maker: string

    @Prop()
    bottleSize: string

    @Prop()
    price: number

    @Prop()
    litrePrice: number

    @Prop()
    type: string

    @Prop()
    subtype?: string

    @Prop()
    beerType?: string

    @Prop()
    country: string

    @Prop()
    area: string

    @Prop()
    year?: string

    @Prop()
    character?: string

    @Prop()
    alcoholPercentage: number

    @Prop()
    energy: number

    @Prop()
    alkoLink: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)