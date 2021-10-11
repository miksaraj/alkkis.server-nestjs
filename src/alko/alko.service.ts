import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./schema/product.schema";

@Injectable()
export class AlkoService {
    constructor(
        @InjectModel(Product.name)
        private productModel: Model<ProductDocument>
        ) {}

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec()
    }

    async findByQuery(query: string): Promise<Product[]> {
        return await this.productModel.find({ name : { $regex : query, $options: "i" } }).exec()
    }
}