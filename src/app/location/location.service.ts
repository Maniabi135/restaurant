import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseURL = 'http://localhost:3000/';

  constructor( private http: HttpClient ) { }

  getAllLocationData() {
    return this.http.get(this.baseURL + 'locations', { responseType: 'json' });
  }

  createLocationData(location_name, location_code, location_id, country, country_code) {
    const createData = {
      location_name,
      location_code,
      location_id,
      country,
      country_code
    };
    console.log(createData);
    return this.http.post(this.baseURL + 'locations', createData);
  }
}
