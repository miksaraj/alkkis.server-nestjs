import { Product } from "../../alko/interface/product.interface"
import { Drinker } from "../interface/drinker.interface"

export class BacRequestDto {
    drinker: Drinker
    products: Product[]
}