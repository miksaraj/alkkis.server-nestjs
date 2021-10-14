import { Injectable } from "@nestjs/common";
import { BacRequestDto, BacRepresentation } from "src/typedef/alkkis";
import { calculateBac, getBacRepresentation } from './functions/bac.functions'

@Injectable()
export class BacService {
    constructor() {}

    getBac(data: BacRequestDto): BacRepresentation {
        return getBacRepresentation(calculateBac(data))
    }
}