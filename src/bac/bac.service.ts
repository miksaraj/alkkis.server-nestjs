import { Injectable } from "@nestjs/common";
import { BacRequestDto } from "./dto/bac-request.dto";
import { BacRepresentation, calculateBac, getBacRepresentation } from './functions/bac.functions'

@Injectable()
export class BacService {
    constructor() {}

    getBac(data: BacRequestDto): BacRepresentation {
        return getBacRepresentation(calculateBac(
            data.products,
            data.drinker
        ))
    }
}