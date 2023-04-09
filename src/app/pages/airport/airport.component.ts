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

  constructor(private store: Store, private router: Router) {
    this.airport = store.selectSnapshot(state => state.airport.listAirport);
    if(!this.airport) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

}
