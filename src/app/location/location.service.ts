import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor( private http: HttpClient ) { }

  getAllLocationData() {
    return this.http.get(baseURL + 'locations', { responseType: 'json' });
  }

  createLocationData(location_name, location_code, location_id, country, country_code) {
    const createData = {
      location_name,
      location_code,
      location_id,
      country,
      country_code
    };
    return this.http.post(baseURL + 'locations', createData);
  }

  getData(id) {
    return this.http.get(baseURL + 'locations/' + id, { responseType: 'json' });
  }

  updateLocationData(id, location_name, location_code, location_id, country, country_code) {
    const updateData = {
      location_name,
      location_code,
      location_id,
      country,
      country_code
    };
    return this.http.put(baseURL + 'locations/' + id, updateData);
  }

  deleteLocationData(id) {
    console.log(id);
    return this.http.post(baseURL + 'locations/' + id, { responseType: 'json' });
  }
}
