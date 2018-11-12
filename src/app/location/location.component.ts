import { locations } from './../../server/routes/locationrouter';
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

  cur_loc_id;
  locationData: any;
  cityData;
  location_name;
  location_code;
  location_id;
  country;
  country_code;
  buttonTitle;
  emptyLocation  = [
    'location_name',
    'location_code',
    'location_id',
    'country',
    'country_code',
  ];

  populateLocation = [];

  footer_list  = ['Privacy' , 'Terms', 'API Policy', 'CSR', 'Security', 'Sitemap'];
  social_media = ['facebook', 'instagram', 'twitter'];

  location_list = [
    {'label': 'Location Name', 'name': 'location_name'},
    {'label': 'Location Code', 'name': 'location_code'},
    {'label': 'Location Id', 'name': 'location_id'},
    {'label': 'Country', 'name': 'country'},
    {'label': 'Country Code', 'name': 'country_code'}
  ];

  constructor( private locationService: LocationService, private cityService: CityService, public router: Router ) { }

  ngOnInit() {
    this.getLocationData();
  }

  sendData() {
    if (this.buttonTitle === 'Add') {
      this.createLocation();
    } else {
      this.updateLocation();
    }
  }

  emptyModalData() {
    this.cur_loc_id = '';
    this.emptyLocation.forEach(key => this[key] = '');
    this.buttonTitle = 'Add';
  }

  getLocationData() {
    this.locationService.getAllLocationData().subscribe(
      data => this.locationData = data,
      err  => console.log(err),
      ()   => console.log('All Location Data completed')
    );
  }

  createLocation() {
    // tslint:disable-next-line:max-line-length
    this.locationService.createLocationData(this.location_name, this.location_code, this.location_id, this.country, this.country_code).subscribe(
      data => this.locationData.push(data),
      err  => console.log(err),
      ()   => {
        console.log('Created completed');
        this.getLocationData();
        this.emptyLocation.forEach(key => this[key] = '');
      }
    );
  }

  updateLocation() {
    // tslint:disable-next-line:max-line-length
    this.locationService.updateLocationData(this.cur_loc_id, this.location_name, this.location_code, this.location_id, this.country, this.country_code).subscribe(
      err => console.log(err),
      ()  => {
        console.log('updated completed');
        this.getLocationData();
        this.emptyLocation.forEach(key => this[key] = '');
      }
    );
  }
  updateData(location) {
    this.emptyLocation.forEach(key => this[key] = location[key]);
    this.buttonTitle = 'Update';
    this.cur_loc_id  = location.id;
  }

  deleteLocation(id) {
    console.log(id);
    this.locationService.deleteLocationData(id).subscribe(
      err => console.log(err),
      ()  => {
        console.log('Deleted completed');
        this.getLocationData();
      }
    );
  }

  getAllCityData(id) {
    this.router.navigate(['/']);
    this.cityService.getAllCityData(id).subscribe(
      data => this.cityData = data,
      err  => console.log(err),
      ()   => {
        console.log('City Navigation completed');
      }
    );
    console.log(this.cityData);
  }
}
