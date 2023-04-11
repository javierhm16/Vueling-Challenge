import { Component, OnInit, Input } from '@angular/core';
import { AirportsListService } from '../../services/airport/airports-list.service';
import { Airports } from '../../interfaces/airports';
import { Airport } from 'src/app/interfaces/airport';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddAirport } from 'src/app/store/airport.actions';

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit {

    public airportsList?: Airports[];
    public error?: string;
    public airport?: Airport;
    @Input() public title?: string;

    constructor(private airportsListService: AirportsListService, private router: Router, private store: Store) {
    }

    public ngOnInit(): void {
        this.getAllAirports();
    }

    public async clickAirport(key: string): Promise<void> {
        this.airport = await this.airportsListService.getAirport(key);
        this.store.dispatch(new AddAirport(this.airport));
        this.router.navigateByUrl('airport');
    }

    public getAllAirports(): void {
        this.airportsListService.getAllAirports().then((res) => {
            this.airportsList = res;
        }).catch((error) => {
            this.error = error.message;
        });
    }
}
