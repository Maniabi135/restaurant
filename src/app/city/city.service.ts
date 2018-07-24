import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseURL = 'http://localhost:3000/';

  constructor( private http: HttpClient ) { }

  getAllCityData(id: number): any {
    return this.http.get(this.baseURL + 'cities/' +  id, { responseType: 'json' });
  }

}
