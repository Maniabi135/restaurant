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

}
