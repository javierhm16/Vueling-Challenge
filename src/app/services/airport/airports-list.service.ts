import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airports } from '../../interfaces/airports';
import { Airport } from '../../interfaces/airport';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AirportsListService {

    private url: string = environment.apiUrl;
    private pathAllAirports: string = '/allAirports';
    private pathAirport: string = '/airport';

    constructor(private http: HttpClient) {
    }

    // Get All Airports
    public getAllAirports(): Promise<Airports[]> {
        const securityKey = '1234567890';
        return this.http.get<Airports[]>(this.url + this.pathAllAirports, { headers: { securityKey } }).toPromise();
    }

    // Get Airport
    public getAirport(airportKey: string): Promise<Airport> {
        const securityKey = '1234567890';
        return this.http.post<Airport>(this.url + this.pathAirport, { key: airportKey }, { headers: { securityKey } }).toPromise();
    }

}
