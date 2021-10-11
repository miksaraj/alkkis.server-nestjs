import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    num: string

    @Prop()
    name: string

    @Prop()
    maker: string

    @Prop()
    bottlesize: string

    @Prop()
    price: number

    @Prop()
    litreprice: number

    @Prop()
    type: string

    @Prop()
    subtype: string

    @Prop()
    country: string

    @Prop()
    area: string
    
    @Prop()
    year?: string

    @Prop()
    character: string

    @Prop()
    alkopros: number

    @Prop()
    energy: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)