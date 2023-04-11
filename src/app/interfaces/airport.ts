import { Airports } from "./airports";

export interface Airport extends Airports {
    owner: string,
    build: string,
    image: string,
}