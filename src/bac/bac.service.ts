import { Injectable } from "@nestjs/common";
import { BacRequestDto } from "./dto/bac-request.dto";
import { calculateBac, getBacRepresentation } from './functions/bac.functions'

@Injectable()
export class BacService {
    constructor() {}

    getBac(data: BacRequestDto): string {
        return getBacRepresentation(calculateBac(
            data.products,
            data.drinker
        ))
    }
}