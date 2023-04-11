import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Airport } from 'src/app/interfaces/airport';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {

  public airport: Airport;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.getAirport();
    this.goBack();
  }

  // Get airport
  public getAirport(): void {
    this.airport = this.store.selectSnapshot(state => state.airport.listAirport);
  }

  // Return to airports list
  public goBack(): void {
    if (!this.airport) {
      this.router.navigateByUrl('airportsList');
    }
  }



}
