import { Airport } from "../interfaces/airport";

export class AddAirport {
    static readonly type = '[Airport] Add';
    constructor(public payload: Airport) { }
}

