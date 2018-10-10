import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { CityService } from '../city/city.service';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-location',
  templateUrl: './location.component.html',
  styleUrls  : ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationData;
  cityData;

  constructor( private locationService: LocationService, private cityService: CityService, public router: Router ) { }

ngOnInit() {
    this.locationService.getAllLocationData().subscribe(
      data => this.locationData = data,
      err  => console.log(err),
      ()   => console.log('location completed')
    );
  }

  getAllCityData(id) {
    console.log(id);
    this.router.navigate(['/city']);
    this.cityService.getAllCityData(id).subscribe(
      data => this.cityData = data,
      err  => console.log(err),
      ()   => console.log('city completed')
    );
    console.log(this.cityData);
  }
}
