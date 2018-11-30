import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';
import { CityService } from './city.service';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-city',
  templateUrl: './city.component.html',
  styleUrls  : ['./city.component.css']
})
export class CityComponent implements OnInit {

  id = 201;
  cityData;

  constructor( private locationService: LocationService, private cityService: CityService, public router: Router) { }

  ngOnInit() {
    this.cityService.getAllCityData(this.id).subscribe(
      data => this.cityData = data,
      err  => console.log(err),
      ()   => console.log('city completed')
    );
    console.log(this.cityData);
  }

}
