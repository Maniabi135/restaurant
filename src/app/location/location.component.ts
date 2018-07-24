import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationData;
  cityData;

  constructor( private locationService: LocationService, private cityService: CityService ) { }

  ngOnInit() {
    this.locationService.getAllLocationData().subscribe(
      data => this.locationData = data,
      err => console.log(err),
      () => console.log('completed')
    );

    // this.cityService.getAllCityData(id).subscribe(
    //   data => this.cityData = data,
    //   err => console.log(err),
    //   () => console.log('completed')
    // );
  }

}
