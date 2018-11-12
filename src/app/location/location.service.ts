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
    return this.http.post(this.baseURL + 'locations', createData);
  }

  getData(id) {
    return this.http.get(this.baseURL + 'locations/' + id, { responseType: 'json' });
  }

  updateLocationData(id, location_name, location_code, location_id, country, country_code) {
    const updateData = {
      location_name,
      location_code,
      location_id,
      country,
      country_code
    };
    return this.http.put(this.baseURL + 'locations/' + id, updateData);
  }

  deleteLocationData(id) {
    console.log(id);
    return this.http.post(this.baseURL + 'locations/' + id, { responseType: 'json' });
  }
}
