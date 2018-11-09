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
  location_name;
  location_code;
  location_id;
  country;
  country_code;

  footer_list   = ['Privacy' , 'Terms', 'API Policy', 'CSR', 'Security', 'Sitemap'];
  social_media  = ['facebook', 'instagram', 'twitter'];
  location_list = [
    {'label': 'Location Name', 'name': 'location_name'},
    {'label': 'Location Code', 'name': 'location_code'},
    {'label': 'Location Id', 'name': 'location_id'},
    {'label': 'Country', 'name': 'country'},
    {'label': 'Country Code', 'name': 'country_code'}
  ];

  constructor( private locationService: LocationService, private cityService: CityService, public router: Router ) { }

  ngOnInit() {
    this.locationService.getAllLocationData().subscribe(
      data => this.locationData = data,
      err  => console.log(err),
      ()   => console.log('location completed')
    );
  }

  getAllCityData(id) {
    this.router.navigate(['/city']);
    this.cityService.getAllCityData(id).subscribe(
      data => this.cityData = data,
      err  => console.log(err),
      ()   => console.log('city completed')
    );
    console.log(this.cityData);
  }

  createData() {
    console.log(this.location_name, this.location_code,  this.location_id, this.country, this.country_code);
    // tslint:disable-next-line:max-line-length
    this.locationService.createLocationData(this.location_name, this.location_code,  this.location_id, this.country, this.country_code).subscribe(
      data => this.locationData = data,
      err  => console.log(err),
      ()   => console.log('location completed')
    );
  }

  // updateData() {
  //   console.log(this.location_name + this.location_code + this.location_id + this.country + this.country_code);
  // }
}
