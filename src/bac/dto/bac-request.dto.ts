import { Product } from "src/alko/interface/product.interface"
import { Drinker } from "../interface/drinker.interface"

export class BacRequestDto {
    drinker: Drinker
    products: Product[]
}